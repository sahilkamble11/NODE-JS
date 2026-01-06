module.exports=function userRepository(db)
{
    return{

insertUser :(name, contact, result)=>  {
    const sql = "call spinsertUser(?,?)";
    db.query(sql, [name, contact], result);
},

deleteUser : (id, result) => {
    const sql = "call spdeleteUser(?)";
    db.query(sql, [id], result);
},

getUsers : (result)=>{
     
    db.query('CALL spgetUsers()',(err, res)=>{
        if(err){
            result(err,null);
        }
        else{
            result(null,res[0]);
        }
    });
},

updateUser :(id, name, contact, result)=>{
    const sql = "call spupdateUsers(?,?,?)";
    db.query(sql, [id,name, contact], result);
},

specificUser :(id,result)=>{
    const sql="call spspecificUser(?)";
    db.query(sql,[id],(err,res)=>{
        if(err){
            result(err,null);
        }
        else{
            result(null,res[0]);
        }
    });
},

specificUser:(id,result)=>{
    const sql="call spspecificUser(?)";
    db.query(sql,[id],(err,res)=>{
        if(err){
            result(err,null);
        }
        else{
            result(null,res[0]);
        }
    });
},
spuserById:(id,result)=>{
    const sql=`CALL spgetById(?,@name,@contact);
               SELECT @name AS name,@contact AS contact;`;
    db.query(sql,[id],(err,res)=>{
        if(err){
            result(err,null);
        }
        else{
            result(null,res)
        }
    })
}

};
}