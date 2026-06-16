#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT="${PORT:-3000}"
HOSTNAME="${HOSTNAME:-127.0.0.1}"

cd "${ROOT_DIR}"

# AppHub dev launches must start from a clean Next output, otherwise mixed
# dev/prod artifacts can leave webpack runtime and chunk paths inconsistent.
rm -rf .next

export NEXT_TELEMETRY_DISABLED=1

exec npm run dev -- --hostname "${HOSTNAME}" --port "${PORT}"
