#!/bin/bash

pushd blog

# hugo new posts/bfs.md

hugo -D
cp -r public/* ../
git commit -am "update"
git push origin clear:master
popd
