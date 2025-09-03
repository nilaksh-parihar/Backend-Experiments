const http = require('http');
const file = require('fs');

const server = http.createServer((request, response) => {
  file.readFile('sample.txt', 'utf8', (error, data) => {
    if (error) {
      if (error.code === 'ENOENT') {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Error: File not found.');
      } else {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Error reading file.');
      }
      return;
    }
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(data);
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});