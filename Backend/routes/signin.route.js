const {Router} = require("express");
const bycryptjs = require("bcryptjs")

const jwt = require("jsonwebtoken");
const Signinrouter = Router()
const User = require("../model/auth.model")

Signinrouter.post("/signin", (req, res,next) => {
    
    try{
        const { email, password } = req.body;

        bycryptjs.genSalt(10, (err, salt) => {
            if (err) {
                return res.status(500).send({
                   status: "error",
                    message: "Invalid Credendtials"
                })
            }
    
            bycryptjs.hash(password, salt, async function (err, hash) {
                if (err) {
                    return res.status(500).send({
                        status: "error", message: "invalid credentials"
                    })
                } else {
    
                    try{
    
    
                        await new User({
                            ...req.body,
                            password: hash
                        }).save();
                        return res.status(201).send({
                            status: "success",
                            message: "signup successfull"
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



module.exports = Signinrouter;

