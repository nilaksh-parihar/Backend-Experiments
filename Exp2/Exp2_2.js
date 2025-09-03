const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'output.txt');
const writeStream = fs.createWriteStream(filePath, { flags: 'w', encoding: 'utf8' });

writeStream.write('Hello Nilaksh\n', (err) => {
  if (err) {
    console.error('Error writing to file:', err.message);
  } else {
    console.log('Data written successfully to output.txt');
  }
});

writeStream.end();