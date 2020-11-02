# What is this?

This is a webpack plugin that allows you to get all the entripoints and insert them into your markup.

# Instalation

`npm i -D emotion-webpack-entrypoints-plugin`

# Usage

```
const EntrypointsPlugin = require('./EntrypointsPlugin/EntrypointsPlugin')

plugins: [
  new EntrypointsPlugin({
    dir: path.resolve(__dirname, 'build/')
  })
]
```