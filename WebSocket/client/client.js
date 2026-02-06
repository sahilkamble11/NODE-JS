const net=require("net");

const client=new net.Socket();

client.connect(5000,"localhost",()=>{
    console.log("Connected to server");

    client.write("Hello Sahil's Server!");
});

client.on("data",(data)=>{
    console.log("Sahil's Server Says: ",data.toString());

    client.end();
});

client.on("close",()=>{
    console.log("Connection closed");
});