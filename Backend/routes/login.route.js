const {Router} = require("express")
const User = require("../model/auth.model")
const bcryptjs = require("bcryptjs");
Loginrouter =Router();
const jwt = require("jsonwebtoken");
// const authentication = require("../middleware/Authentications");
require("dotenv").config();
const bycryptjs = require("bcryptjs")
Loginrouter.post("/login",async(req,res)=>{
    const { email,password} =req.body
    const user = await User.find({email})
    console.log(user)
    const hash = user[0].password;
    console.log(hash)
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
Loginrouter.post("/updateemail",async(req,res)=>{
    const { email,password,updateemail} =req.body


    User.findOne({email}, (err, user) => {
  
        if (err) {
            res.send(err);
        } else {
          
         user.email=req.body.updateemail
      
         user.save()
         res.send("user")
        }
   
})
})

Loginrouter.post("/updatepassword",async(req,res)=>{
    const { email,password,updateemail,updatepassword} =req.body


    try{

        bycryptjs.genSalt(10, (err, salt) => {
            if (err) {
                return res.status(500).send({
                   status: "error",
                    message: "Invalid Credendtials"
                })
            }
    
            bycryptjs.hash(updatepassword, salt, async function (err, hash) {
                if (err) {
                    return res.status(500).json({
                        status: "error", message: "invalid credentials"
                    })
                } else {
    
                    try{
        User.findOne({email}, (err, user) => {
        console.log(user)
        if (err) {
            res.send(err);
        } else {
         user.password=hash
         user.save()
         res.send(user)
        }
   
})
    
    
                    }
    
                    catch(error){
    
    
                        return res.status(500).send({
                            status: "error", message: "bad request"
                        })
                    }
    
    
    
                }
            })
        })
    }catch(error){
        res.send(error);
    }
             

})








module.exports =Loginrouter