//iterate files on tests folder

let fs = require('fs');
let { fork } = require('child_process')

let files =fs.readdirSync(__dirname + '/tests')

files.forEach(file => {
  fork(`./tests/${file}`)
})