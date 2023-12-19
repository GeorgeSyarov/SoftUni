let http = require("http");
let fs1 = require("fs");

let pageSet = fs1.readFileSync('./index.html')

http.createServer((req,res)=>{
    res.writeHead(200);
    res.write(pageSet);
    res.end();
}).listen(3000);