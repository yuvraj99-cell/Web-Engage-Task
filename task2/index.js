const nunjucks = require('nunjucks')
const userData = require('./db.json')
const fs = require('fs')
nunjucks.configure({
  autoescape: true,
})
nunjucks.configure('views', {
  autoescape: true,
})

let data = nunjucks.render('index.njk', userData)
fs.writeFileSync('./result/index.html', data)
