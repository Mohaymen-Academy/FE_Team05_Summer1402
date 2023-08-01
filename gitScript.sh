# this is a script that automatically create a branch and pushes to remote repo
#!/bin/bash

# Check if both arguments are provided
if [ $# -ne 2 ]; then
  echo "Usage: $0 [bName] [cMessage]"
  exit 1
fi

cMessage="$2"

# Perform git commands
git add -A
git commit -m "$cMessage"

if [ -n "$1" ]; then
  bName="$1"
  git checkout -b "$bName"
  git push origin "$bName"
fi