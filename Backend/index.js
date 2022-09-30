const express=require("express")
const { connection } = require("./config/db")
const Signinrouter = require("./routes/signin.route")
require("dotenv").config();
const app = express()

app.use(express.json())


app.post("/signin",Signinrouter)
// app.post("/login",loginrouter)
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

