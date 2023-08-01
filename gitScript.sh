# this is a script that automatically create a branch and pushes to remote repo
#!/bin/bash

# Check if both arguments are provided
if [ $# -lt 1 ]; then
  echo "Usage: $0 [bName] [cMessage]"
  exit 1
fi

cMessage="$1"

# Perform git commands
git add -A
git commit -m "$cMessage"

if [ $# -ge 2 ]; then
  bName="$2"
  git checkout -b "$bName"
  git push origin "$bName"
fi