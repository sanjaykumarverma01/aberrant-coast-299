const {Router} = require("express")
const User = require("../model/auth.model")
const bcryptjs = require("bcryptjs");
Loginrouter =Router();
const jwt = require("jsonwebtoken");
const authentication = require("../middleware/Authentications");
require("dotenv").config();

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
Loginrouter.patch("/updatelogin",authentication,async(req,res)=>{
    const { email,password,oldemail} =req.body
    console.log(req.body)
    // try{
      
    //     console.log(req.body)
    //     bcryptjs.genSalt(10, (err, salt) => {
    //         if (err) {
    //             return res.status(500).send({
    //                status: "error",
    //                 message: "Invalid Credendtials"
    //             })
    //         }
    
    //         bcryptjs.hash(password, salt, async function (err, hash) {
    //             if (err) {
    //                 return res.status(500).json({
    //                     status: "error", message: "invalid credentials"
    //                 })
    //             } else {
    
    //                 try{
    
    
    //                     await new User({
    //                         ...req.body,
    //                         email:email,
    //                         password: hash
    //                     }).save();
    //                     return res.status(201).json({
    //                         status: "success changes",
    //                         message: "changes successfull"
    //                     })
    
    
    //                 }
    
    //                 catch(error){
    
    
    //                     return res.status(500).send({
    //                         status: "error", message: "bad request"
    //                     })
    //                 }
    
    
    
    //             }
    //         })
    //     })
    // }catch(error){
    //     res.send(error);
    // }
     

    
})









module.exports =Loginrouter