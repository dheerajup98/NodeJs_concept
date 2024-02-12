const http = require("http");
const fs = require("fs");


const PORT = 4000;
const hostname = "localhost";
const body = fs.readFileSync("./index.html");


const server = http.createServer((req,res)=>{

       if(req.url === "/"){
      return  res.end(body);
       }
       if(req.url=== "/about"){
       return res.end("<h1>About page</h1>")
       }
       else{
       return res.end("<h1>404 page not found</h1>");
       }
});

server.listen(PORT,hostname,()=>{
    console.log(`server is working on http://${hostname}:${PORT}`);
});