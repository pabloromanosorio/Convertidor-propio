#!/bin/bash
cd "$(dirname "$0")"
/usr/local/bin/node server.js > server.log 2>&1
