#### [https://datamadic.github.io/](https://datamadic.github.io/)

```sh
pushd blog

# ../hugo/hugo  new posts/bfs.md
# ../hugo/hugo  server -D

../hugo/hugo -D
cp -r public/* ../
cd ..
git commit -am "update"
git push origin clear:master

popd
```
