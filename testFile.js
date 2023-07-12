const http = require('http');
const server =http.createServer((req,res)=>{
const url=req.url;
if(req==='/'){
    res.setHeader('Contax-Type','text/html');
    res.write('<html>');
    res.write('<head><title>do some shit</title></head>');
    res.write('<body><from action="/massage" method="POST"><input type="text" "name=message">button type="submit"></from></button></body>');
    res.write('</html>');
    res.end();
return res.end();
}


// res.setHeader('Contax-Type','text/html');
// res.write('<html>');
// res.write('<head><title>may page</title></head>');
// res.write('<body><h1>hello</h1></body>');
// res.write('</html>');

});
server.listen(3000)