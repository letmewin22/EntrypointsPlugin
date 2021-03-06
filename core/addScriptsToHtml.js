const fs = require('fs')

function addScriptsToHtml(entrypoints, path = './js', dir) {

  const outputJs = entrypoints.app.js.map((el) => {
    return `\n    <script src="${path}/${el}"></script>`
  })
  const rg = /<!-- BEGIN scripts -->(\w|\W.{0,}|\s.{0,}|.{0,}.\s.*){0,}<!-- END scripts -->/gm

  const output = `<!-- BEGIN scripts -->${outputJs.join(' ')}
    <!-- END scripts -->`

  return fs.readdir(dir, function(_, items) {
    if (items) {
      items.forEach((item) => {
        if (item.replace(item.slice(0, -5), '') === '.html') {
          const HTMLpath = `${dir}/${item}`
          const html = fs.readFileSync(HTMLpath, 'utf8')
            fs.writeFile(HTMLpath, html.replace(rg, output), () => {})
        }
      })
    }
  })
}

module.exports = addScriptsToHtml
