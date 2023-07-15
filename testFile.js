const http = require('http');
const fs = require('fs');

const  server = http.createServer((req, res) => {
// console.log(req.url, req.headers , req.method);
const url= req.url;
const method=req.method;
if(url==='/'){
    res.write('<html>');
    res.write('<head><title>massasge</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text"><button type="sunmit">seend</button></body>');
    res.write('</html>');
    return res.end(); 
}
if(url === 'message' && method === 'POST'){
fs.writeFileSync('massage.txt', 'hello');
res.statusCode=302;
res.setHeader('location', '/')
return res.end(); 

}

res.setHeader('content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>HI</title></head>');
res.write('<body><h1>hello sir</h1></body>');
res.write('</html>');
res.end();
});

server.listen(8000);