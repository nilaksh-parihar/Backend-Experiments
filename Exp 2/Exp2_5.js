const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'something.txt');

const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

readStream.on('error', (err) => {
  console.error('An error occurred while reading the file:');
  console.error(err.message);
});

readStream.on('data', (chunk) => {
  console.log(chunk);
});
