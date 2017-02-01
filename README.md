# gdc-indigo-visualizations

Indigo Visualizations in React

## Dev

run `npm test` in console, uses `mocha` watcher for now

## Release

  1. Switch to master branch `git checkout master`
  2. Synchronize from upstream `git tag -l | xargs git tag -d; git fetch upstream; git reset --hard upstream/master`
  3. Create new version `npm version [major|minor|patch] -m "Release v%s"`
  4. Push to upstream `git push --tags upstream master`
  5. Release `npm publish --access=restricted`
