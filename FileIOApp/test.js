var fs=require('fs');
var fileName="./data/result.txt";


var onFileRead=function(err,data){
    
    if(err){
        console.log("Data not Available");
    }
    else{
        console.log("Data Available in File");
        console.log(data.toString());
    }
    
}
fs.readFile(fileName,onFileRead);
