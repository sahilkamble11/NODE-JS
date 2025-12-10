var http=require('http');
var onRequestHandler=function(request,response){
    //console.log("Request Received...");

    response.writeHead(200,{'Content-Type':'text/html'});
    response.write("<h1>Response from server :)</h1>");
    response.end();
}
var server=http.createServer(onRequestHandler);
server.listen(9999);
console.log("Server is Listening on Port no. 9999");