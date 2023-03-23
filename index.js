
import http from "http";
import gfname from "./features.js";

console.log(gfname);

//this is called the arrow function 
const server = http.createServer((req,res) => {
        if(req.url==="/about"){
            res.end("<h1>about page</h1>");
        }else if(req.url==="/"){
            res.end("<h1>home page</h1>");
        }else if(req.url==="/contact"){
            res.end("<h1>contact page</h1>");
        }else{
            res.end("page not found");
        }
});

server.listen(5000,()=>{
    console.log("served");
});




// console.log("hello world");
// console.log("hi this is rohit");

// console.log("hi their is a awesome coder ");