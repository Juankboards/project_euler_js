//iterate files on tests folder

let fs = require('fs');

const testsDir = __dirname + '/tests'

let files =fs.readdirSync(testsDir)

files.forEach(file => {
  files.forEach(function (file, index) {
  	let test = require(`./tests/${file}`)  	
  })
})