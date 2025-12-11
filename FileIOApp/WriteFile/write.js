var fs=require('fs');
var fileName='./data/info.txt';
var dataToBeWritten="This data is written by Node JS application..";

var onFileWrite=function(err){
    if(err){
        throw err;
    }
    console.log("Data is written sucessfully!!");
}
fs.writeFile(fileName,dataToBeWritten,onFileWrite);
console.log("Data written");
