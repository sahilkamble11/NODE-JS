var http=require('http');
var onRequestHandler=function(request,response){
    //console.log("Request Received...");

    response.write("Response from server :)");
    response.end();
}
var server=http.createServer(onRequestHandler);
server.listen(9999);
console.log("Server is Listening on Port no. 9999");