var fs=require('fs');
var fileName="./data/result.txt";


var onFileRead=function(err,data){
    console.log("Data Available in File");
    console.log(data.toString());
    
}
fs.readFile(fileName,onFileRead);
