#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
DESKTOP_DIR="${HOME}/.local/share/applications"
TEMPLATE="${APP_DIR}/tools/desktop/tuskevardse.desktop.in"
OUT="${DESKTOP_DIR}/tuskevardse.desktop"
EXEC_PATH="${APP_DIR}/scripts/tuskevardse_oneclick.sh"
ICON_PATH="${APP_DIR}/logo.png"

mkdir -p "${DESKTOP_DIR}"
chmod +x "${EXEC_PATH}"

sed \
  -e "s|{{EXEC_PATH}}|${EXEC_PATH}|g" \
  -e "s|{{ICON_PATH}}|${ICON_PATH}|g" \
  "${TEMPLATE}" >"${OUT}"

chmod +x "${OUT}"

echo "Installed desktop launcher: ${OUT}"
echo "Menu entry: Tüskevár DSE"
