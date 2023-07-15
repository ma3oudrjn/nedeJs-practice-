const http = require('http');
const fs = require('fs'); // File System core mudule
const { buffer } = require('stream/consumers');
const server =http.createServer((req ,res)=>{
const Url=req.url;
const Method=req.method;

 if (Url=== '/'){
    res.write('<html>')
    res.write('<head><title>heloo</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text>"><button type="submit">Send</button></input></form></body>')
    res.write('</html>')
    return res.end(); 
 }

 if (Url ==='/message' && Method ==='POST'){
    let allData=[];
    fs.writeFileSync('message.txt', message);
    res.statusCode = 302;
    res.setHeader('location','/')
    req.on('data',(chunk) =>{
        console.log(chunk); 
 allData.push(chunk);
    });

req.on('end', () =>{

const bodyTo = buffer.concat(body).toString();
console.log(bodyTo);
const message=bodyTo.splite("=")[1]; 
});


}
 res.write('<html>')
 res.write('<head><title>heloo</title></head>')
 res.write('<body><h1>hi</h1></body>')
 res.write('</html>')
 res.end();
 

res.setHeader('Content-Type', 'text/html');





});


server.listen(8000);