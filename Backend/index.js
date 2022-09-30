const express=require("express")
const { connection } = require("./config/db")
const Signinrouter = require("./routes/signin.route")
const Loginrouter =require("./routes/login.route");
const { validate } = require("./model/auth.model");
const authentication = require("./middleware/Authentications");
require("dotenv").config();
const app = express()

app.use(express.json())
app.use(validate)

app.post("/signin",Signinrouter)
app.use(authentication)
app.post("/login",Loginrouter)
const PORT = process.env.PORT
app.listen(PORT,async()=>{
 try{
await connection
console.log("connect the mongodb")
 }

 catch{
console.log("connection error")
 }

 console.log(`server start in ${PORT}`)
})

