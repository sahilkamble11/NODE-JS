const net = require("net");

const server=net.createServer((socket)=>{
    console.log("Client Connected...");

    socket.on("data",(data)=>{
        const msg=data.toString();

        console.log("Client says: ",msg);

        const reply = "\nHello Client, I received: "+msg;

        socket.write(reply);
    });
   socket.on("end",()=>{
    console.log("Client Discontinued....")
   });
});

server.listen(5000,()=>{
    console.log("Server Started at port 5000..");
});