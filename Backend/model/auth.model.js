const { Schema,model } = require("mongoose")


const userSchema = new Schema({
    email:String,
     weight:String,
     password:String,
     
     centimeter:String,
Height:String,
     sex:String,
     
     date:String,
})

const User = model("user",userSchema)

module.exports =  User
