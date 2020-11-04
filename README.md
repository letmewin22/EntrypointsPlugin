# What is this?

This is a webpack plugin that allows you to get all the entrypoints and insert them into your markup.

# Instalation

`npm i -D emotion-webpack-entrypoints-plugin`

or

`yarn add --dev emotion-webpack-entrypoints-plugin`

# Usage

```
const EntrypointsPlugin = require('emotion-webpack-entrypoints-plugin')

plugins: [
  new EntrypointsPlugin({
    dir: [folder with html],
    path: [path to your scripts]
  })
]
```
**You must have a wrapper for scripts in HTML**

```
HTML:
  <!-- BEGIN scripts -->
  <!-- END scripts -->
```

# Example

### webpack

```
const path = require('path')
const EntrypointsPlugin = require('emotion-webpack-entrypoints-plugin')

plugins: [
  new EntrypointsPlugin({
    dir: path.resolve(__dirname, 'src/templates/layouts'),
    path: './js'
  })
]
```

### HTML input

```
 <!-- BEGIN scripts -->
 <!-- END scripts -->
```

### HTML output

```
<!-- BEGIN scripts -->
  <script src="./js/vendors~app.js"></script> 
  <script src="./js/app.js"></script>
<!-- END scripts -->
```