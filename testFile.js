const http = require('http');
const server =http.createServer((req,res)=>{

console.log(req.url, req.method, req.headers);
res.setHeader('Contax-Type','text/html');
res.write('<html>');
res.write('<head><title>may page</title></head>');
res.write('<body><h1>hello</h1></body>');
res.write('</html>');
res.end();
});
server.listen(3000)