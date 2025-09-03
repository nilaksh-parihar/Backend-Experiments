//Http server
const http = require('http');

let users = [
    { id: 1, name: 'Anadi' },
    { id: 2, name: 'Priyanshu' }
];

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/users' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
    else if (url === '/users' && method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            const data = JSON.parse(body);
            const newUser = {
                id: users.length + 1,
                name: data.name
            };
            users.push(newUser);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newUser));
        });
    }
    else if (url.startsWith('/users/') && method === 'PUT') {
        const userId = parseInt(url.split('/')[2]);
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            const data = JSON.parse(body);
            const user = users.find(u => u.id === userId);
            if (user) {
                user.name = data.name;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(user));
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'User not found' }));
            }
        });
    }
    else if (url.startsWith('/users/') && method === 'DELETE') {
        const userId = parseInt(url.split('/')[2]);
        const index = users.findIndex(u => u.id === userId);
        if (index !== -1) {
            users.splice(index, 1);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User deleted' }));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User not found' }));
        }
    }
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Endpoint not found' }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});