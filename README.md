#### [https://datamadic.github.io/](https://datamadic.github.io/)

```sh
pushd blog

# hugo new posts/bfs.md
# hugo server -D

hugo -D
cp -r public/* ../
git commit -am "update"
git push origin clear:master

popd
```
