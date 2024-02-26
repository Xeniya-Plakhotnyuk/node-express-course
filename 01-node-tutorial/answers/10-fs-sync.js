const filePath = './temporary/fileA.txt'
const firstLine = "First Line\n"
const secondLine = "Second Line\n"
const thirdLine = "Third Line\n"
const {readFileSync, writeFileSync} = require('fs')
console.log('start')

writeFileSync(
  filePath,
  firstLine,
  { flag: 'w' }
)

writeFileSync(
  filePath,
  secondLine,
  { flag: 'a' }
)

writeFileSync(
  filePath,
  thirdLine,
  { flag: 'a' }
)

const fileContents = readFileSync(filePath, 'utf8');

console.log(fileContents)
