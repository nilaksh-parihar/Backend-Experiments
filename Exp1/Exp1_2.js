const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }); 
  res.write('Hello\n'); 
  res.end('Request handled successfully.'); 
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});