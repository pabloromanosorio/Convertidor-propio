#!/bin/bash
# Set the directory to the script's location
cd "$(dirname "$0")"

# Kill old server
lsof -ti:3002 | xargs kill -9 2>/dev/null

# Start Server
echo "=================================================="
echo "   Gemini 3.0 PDF Converter - Server Starting...  "
echo "=================================================="
echo "Opening http://localhost:3002 in your browser."
echo ""

nohup node server.js > server.log 2>&1 &
SERVER_PID=$! # Capture the PID

# Wait a few seconds for the server to boot
sleep 3

# Open browser
open http://localhost:3002

echo "Server PID: $SERVER_PID"
echo "Check server.log for output or browser console."
echo ""
echo "To stop the server, run: kill $SERVER_PID"
echo "--------------------------------------------------"
echo "Press Ctrl+C to stop this script (won't stop server if nohup works)."

wait $SERVER_PID # Wait for the server to exit if nohup doesn't detach properly.
