const fs = require('fs')
const files = fs.readdirSync(__dirname)
//leio tudo

files.forEach(e => console.log(e))