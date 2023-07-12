const http = require('http');

const  server = http.createServer((req, res) => {
console.log(req.url, req.headers , req.method);
res.setHeader('content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>HI</title></head>');
res.write('<body><h1>hello sir</h1></body>');
res.write('</html>');
res.end();
});

server.listen(8000);