#!/bin/bash
cd "$(dirname "$0")"
echo "========================================="
echo "Installing Document Converter Dependencies"
echo "========================================="
echo ""
npm install
echo ""
echo "========================================="
echo "Installation Complete!"
echo "You can now double-click 'start.command' to run the app."
echo "========================================="
read -n 1 -s -r -p "Press any key to close..."
