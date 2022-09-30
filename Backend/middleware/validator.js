const User = require("../model/auth.model");

const validator = async (req,res,next)=>{

const userData = await User.find({email:req.email});
if(userData.length){
    
    return res.json({status:"error",message:"user already exist"})
}else{
    next()
}




}

module.exports = validator