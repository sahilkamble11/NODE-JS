var express=require('express');
const { request } = require('http');
var path=require('path');

var app=express();
var staticFolder=express.static(path.join(__dirname,"public"));
app.use(staticFolder);

app.get("/",(request,response)=>{
    response.sendFile(__dirname+"/index.html");
});

app.get("/hello",(request,response)=>{
    response.sendFile(path.join(__dirname,"public","/family.json"));
});
app.listen(9000);
console.log("Server Listening on port no. 9000 ");