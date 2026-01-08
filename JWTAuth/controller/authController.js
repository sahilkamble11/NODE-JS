const jwt = require('jsonwebtoken');

const jwtSecretKey = "transflower_secret";

exports.login = (req,res)=>{
    const user=req.body;

    if(
        user.email === "sahil.kamble@gmail.com"&&
        user.role === "admin"
        && user.password === "transflower"
    ){
        const payload = {
            email: user.email,
            role: user.role,
            time: new Date().toISOString()
        };

        const token=jwt.sign(payload,jwtSecretKey,{expiresIn: "1h"});
        console.log("JWT issued for:",payload.email,payload.role);
        res.status(200).json({token});
    }
    else{
        res.status(401).send("Invalid User");
    }
};