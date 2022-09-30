const { Schema, default: mongoose } = require("mongoose")


const userSchema = new Schema({
    email:String,
     weight:String,
     password:String,
     confirmpassword:String,
     centimeter:String,
Height:String,
     sex:String,
     
     date:String,
})

const User = mongoose.model("user",userSchema)

module.exports = {
    User
}