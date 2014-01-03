#!/bin/bash
git add -A .
read -p "Commit message? " message
git commit -m "$message"
git push
exit 0
