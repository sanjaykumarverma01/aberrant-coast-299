const {Router} = require("express")
const User = require("../model/auth.model")
const bcryptjs = require("bcryptjs");
Loginrouter =Router();
const jwt = require("jsonwebtoken")
require("dotenv").config();

Loginrouter.post("/login",async(req,res)=>{
    const { email,password} =req.body
    const user = await User.find({email})
    console.log(user)
    const hash = user[0].password;
    // console.log(hash)
    bcryptjs.compare(password,hash,async(err,result)=>{
        if(err){
            return res.status(500).send({
                status:"error",
                message:"invalid credentials"
            });
        }

        if(result){
            const token = await jwt.sign({email},process.env.secret);
            return res.status(201).send({
                status:"success",
                email,
                message:"login successful",
                token
            })
        }else{
            return res.status(500).send({status:"error",message:"invalid credentials"})
        }
    })

    
})
module.exports =Loginrouter