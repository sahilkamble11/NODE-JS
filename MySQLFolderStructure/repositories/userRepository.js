const connection = require('../config/db');

exports.insertUser = (name, contact, result) => {
    const sql = "call spinsertUser(?,?)";
    connection.query(sql, [name, contact], result);
};

exports.deleteUser = (id, result) => {
    const sql = "call spdeleteUser(?)";
    connection.query(sql, [id], result);
};

exports.getUsers = (result) => {
     
    connection.query('CALL spgetUsers()',(err, res)=>{
        if(err){
            result(err,null);
        }
        else{
            result(null,res[0]);
        }
    });
};

exports.updateUser = (id, name, contact, result) => {
    const sql = "call spupdateUsers(?,?,?)";
    connection.query(sql, [id,name, contact], result);
};

exports.specificUser = (id,result)=>{
    const sql="call spspecificUser(?)";
    connection.query(sql,[id],(err,res)=>{
        if(err){
            result(err,null);
        }
        else{
            result(null,res[0]);
        }
    });
};

