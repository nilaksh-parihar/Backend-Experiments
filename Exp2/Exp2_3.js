const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, 'data.txt');
const outputPath = path.join(__dirname, 'output.txt');

fs.access(inputPath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error('Error: input.txt does not exist.');
    return;
  }

  const readStream = fs.createReadStream(inputPath, { encoding: 'utf8' });
  const writeStream = fs.createWriteStream(outputPath, { flags: 'w', encoding: 'utf8' });

  readStream.pipe(writeStream);

  writeStream.on('finish', () => {
    console.log(`Data successfully piped from input.txt to output.txt`);
  });

  readStream.on('error', (error) => {
    console.error('Error reading input file:', error.message);
  });
  writeStream.on('error', (error) => {
    console.error('Error writing to output file:', error.message);
  });
});
