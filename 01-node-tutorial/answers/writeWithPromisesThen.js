const fs = require('fs').promises;

const filePath = './temporary/temp.txt';
const firstLine = "First Line for Then\n";
const secondLine = "Second Line for Then\n";
const thirdLine = "Third Line for Then\n";

fs.writeFile(filePath, firstLine)
  .then(() => {
    console.log('Line 1 written successfully!');
    return fs.writeFile(filePath, secondLine, { flag: 'a' });
  })
  .then(() => {
    console.log('Line 2 written successfully!');
    return fs.writeFile(filePath, thirdLine, { flag: 'a' });
  })
  .then(() => {
    console.log('Line 3 written successfully!');
    return fs.readFile(filePath, 'utf8');
  })
  .then((data) => {
    console.log('File content:', data);
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
