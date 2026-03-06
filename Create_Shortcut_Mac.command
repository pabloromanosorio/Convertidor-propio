#!/bin/bash
cd "$(dirname "$0")"
APP_DIR="$(pwd)"
DESKTOP="$HOME/Desktop"

echo "========================================="
echo "Creating Desktop Shortcut for Mac..."
echo "========================================="

# Create an alias that looks nice on the Mac desktop using AppleScript
osascript -e "tell application \"Finder\" to make alias file to posix file \"$APP_DIR/start.command\" at posix file \"$DESKTOP\""
osascript -e "tell application \"Finder\" to set name of file \"start.command alias\" of folder \"Desktop\" of folder \"$USER\" of folder \"Users\" of startup disk to \"Start Document Converter\"" 2>/dev/null

echo ""
echo "Success! You will now find a 'Start Document Converter' icon on your Desktop."
echo "You can double-click it anytime to start the app."
echo "========================================="
read -n 1 -s -r -p "Press any key to close..."
