const fs = require('fs');

const filePath = './temporary/temp.txt';
const firstLine = "First Line\n";
const secondLine = "Second Line\n";
const thirdLine = "Third Line\n";

const writer = async () => {
    try {
        await fs.promises.writeFile(filePath, firstLine + secondLine + thirdLine);
        console.log('File written successfully!');
    } catch (error) {
        console.error('Error writing file:', error);
    }
}

const reader = async () => {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8');
        console.log('File content:', data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

const readWrite = async () => {
    await writer();
    await reader();
}

readWrite();


