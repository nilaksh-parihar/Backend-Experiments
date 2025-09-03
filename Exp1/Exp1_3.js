const file = require('fs');

file.readFile('sample.txt', 'utf8', (error, data) => {
  if (error) {
    if (error.code === 'ENOENT') {
      console.error('Error: File not found.');
    } else {
      console.error('Error reading file:', err);
    }
    return;
  }
  console.log('File contents:', data);

});