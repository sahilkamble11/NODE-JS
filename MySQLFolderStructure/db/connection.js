const mysql = require('mysql2');


const db =mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'customers',
    multipleStatements: true
});

db.connect(function(err){
    if(err){
        console.log("Connection Unsucessful.."+err)
    }
    else{
        console.log("Connection Sucessful.." )
    }
});

module.exports = db;
