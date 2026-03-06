#!/bin/bash
cd "$(dirname "$0")"
lsof -ti:3002 | xargs kill -9 2>/dev/null

# FORCE node to be unbuffered
export NODE_OPTIONS="--no-warnings"
nohup node server.js > server.log 2>&1 &
echo "Server PID: $!"