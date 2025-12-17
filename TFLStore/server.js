var express=require('express');
var path=require('path');
const flowers = require("./public/flowers.json");
const customers= require("./public/customers.json");
const credentials= require("./public/credentials.json");

var app=express();

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.get("/",function(request,response){
    response.sendFile(path.join(__dirname,"public","index.html"));
});


app.get("/api/flowers",function(request,response){
    response.json(flowers);
});


app.get("/api/flowers/:id",function(request,response){
    let id=request.params.id;
    let flower=flowers.find(x=>x.id==id);
    response.json(flower);
});

app.get("/api/customers",function(request,response){
    response.json(customers);
});

app.get("/api/customers/:id",function(request,response){
    let id=request.params.id;
    let customer=customers.find(x=>x.id==id);
    response.json(customer);
});

app.post("/api/login",(request,response)=>{
    const username=request.body.username;
    const password=request.body.password;
    let user=credentials.find(x=>x.username===username && x.password===password);
    var message="Invalid User"
    if(user){
        message="Valid User"
    }
    console.log(request.body);
    response.send(message);
});

app.post("/api/register",(request,response)=>{
    var newCustomer=request.body;
    customers.push(newCustomer);
    response.send("Customer Registered Sucessfully!! ")
});

app.listen(8787,() =>{
        console.log("Server running at Port no. 8787");
})
