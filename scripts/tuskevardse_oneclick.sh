#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
REPO_ROOT="$(cd "${APP_DIR}/../.." && pwd)"
APPHUB_DIR="${REPO_ROOT}/platform/apphub"
APPHUB_ENV="${APPHUB_DIR}/configs/apphub.env"
APP_KEY="tuskevardse"

read_env_value() {
  local key="$1"

  if [[ ! -f "${APPHUB_ENV}" ]]; then
    return 0
  fi

  python3 - "${APPHUB_ENV}" "${key}" <<'PY'
import sys

path, key = sys.argv[1], sys.argv[2]

try:
    with open(path, encoding="utf-8") as handle:
        lines = handle.readlines()
except FileNotFoundError:
    raise SystemExit(0)

for raw in lines:
    line = raw.strip()
    if not line or line.startswith("#") or "=" not in line:
        continue
    current_key, value = line.split("=", 1)
    if current_key.strip() == key:
        print(value.strip())
        break
PY
}

APPHUB_UP_BIN="${APPHUB_UP_BIN:-${APPHUB_DIR}/bin/apphub-up}"
MANIFEST="${APPHUB_MANIFEST:-$(read_env_value APPHUB_MANIFEST)}"
MANIFEST="${MANIFEST:-${APPHUB_DIR}/configs/apps.publish.yaml}"
GATEWAY_LISTEN="${APPHUB_GATEWAY_LISTEN:-$(read_env_value APPHUB_GATEWAY_LISTEN)}"
GATEWAY_LISTEN="${GATEWAY_LISTEN:-127.0.0.1:18080}"
PORTAL_LISTEN="${APPHUB_PORTAL_LISTEN:-$(read_env_value APPHUB_PORTAL_LISTEN)}"
PORTAL_LISTEN="${PORTAL_LISTEN:-127.0.0.1:8091}"
HOST_SUFFIX="${APPHUB_HOST_SUFFIX:-$(read_env_value APPHUB_HOST_SUFFIX)}"
HOST_SUFFIX="${HOST_SUFFIX:-inspect42.com}"
APP_HOST_SUFFIX="${APPHUB_APP_HOST_SUFFIX:-$(read_env_value APPHUB_APP_HOST_SUFFIX)}"
APP_HOST_SUFFIX="${APP_HOST_SUFFIX:-${HOST_SUFFIX}}"
GATEWAY_URL="${APPHUB_PORTAL_GATEWAY:-$(read_env_value APPHUB_PORTAL_GATEWAY)}"
GATEWAY_URL="${GATEWAY_URL:-http://${GATEWAY_LISTEN}}"

if [[ ! -x "${APPHUB_UP_BIN}" ]]; then
  (cd "${APPHUB_DIR}" && ./scripts/build.sh)
fi

"${APPHUB_UP_BIN}" \
  -repo-root "${REPO_ROOT}" \
  -manifest "${MANIFEST}" \
  -gateway-listen "${GATEWAY_LISTEN}" \
  -portal-listen "${PORTAL_LISTEN}" \
  -gateway-url "${GATEWAY_URL}" \
  -app-host-suffix "${APP_HOST_SUFFIX}" \
  -host-suffix "${HOST_SUFFIX}" \
  up >/dev/null

curl -fsS -X POST "${GATEWAY_URL}/_apphub/start/${APP_KEY}" >/dev/null

TARGET_PORT=""
for _ in $(seq 1 45); do
  STATUS_JSON="$(curl -fsS "${GATEWAY_URL}/_apphub/status")"
  APP_STATUS="$(STATUS_JSON="${STATUS_JSON}" APP_KEY="${APP_KEY}" python3 -c 'import json, os
items = json.loads(os.environ["STATUS_JSON"])
target = os.environ["APP_KEY"]
for item in items:
    if item.get("name") == target:
        print(f"{item.get(\"state\",\"\")} {item.get(\"port\",\"\")}")
        break
')"

  APP_STATE="${APP_STATUS%% *}"
  TARGET_PORT="${APP_STATUS##* }"

  if [[ "${APP_STATE}" == "running" && "${TARGET_PORT}" =~ ^[0-9]+$ && "${TARGET_PORT}" != "0" ]]; then
    break
  fi

  TARGET_PORT=""
  sleep 1
done

if [[ -z "${TARGET_PORT}" ]]; then
  echo "Tüskevár DSE did not become ready." >&2
  echo "Check log: ${APPHUB_DIR}/.state/logs/${APP_KEY}.log" >&2
  exit 1
fi

TARGET_URL="http://127.0.0.1:${TARGET_PORT}/"
PUBLIC_URL="https://${APP_KEY}.${APP_HOST_SUFFIX}"

echo "Tüskevár DSE is ready:"
echo "  local : ${TARGET_URL}"
echo "  public: ${PUBLIC_URL}"

if command -v xdg-open >/dev/null 2>&1; then
  xdg-open "${TARGET_URL}" >/dev/null 2>&1 || true
fi
