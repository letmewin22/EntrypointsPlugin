# What is this?

This is a webpack plugin that allows you to get all the entrypoints and insert them into your markup.

# Instalation

`npm i -D emotion-webpack-entrypoints-plugin`

or

`yarn add --dev -D emotion-webpack-entrypoints-plugin`

# Usage

```
const EntrypointsPlugin = require('./EntrypointsPlugin/EntrypointsPlugin')

plugins: [
  new EntrypointsPlugin({
    dir: path.resolve(__dirname, 'build/')
  })
]
```