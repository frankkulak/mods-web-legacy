#!/usr/bin/env sh

# abort on errors
set -e

# temporary bandaid
export NODE_OPTIONS=--openssl-legacy-provider

# build
npm run build

# navigate into the build output directory
cd dist

# create empty repo and commit all changes
git init
git add -A
git commit -m 'Deploy.'

# overwrite the gh-pages branch
git push -f git@github.com:frankkulak/mods-web-legacy.git main:gh-pages

# navigate back
cd -
