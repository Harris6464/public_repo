// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const express = require('express');
const app = express();
const port = process.env.PORT || 3009;

app.get('/', (req, res) => {
    res.send('Welcome to my Web App!');
    
   
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})