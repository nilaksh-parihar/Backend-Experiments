const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.txt');

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error('Error: data.txt does not exist.');
    return;
  }

  const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

  readStream.on('data', (chunk) => {
    console.log(chunk);
  });

  readStream.on('end', () => {
    console.log('Finished reading file.');
  });

  readStream.on('error', (error) => {
    console.error('Error reading file:', error.message);
  });
});