const express=require("express")
const { connection } = require("./config/db")
const Signinrouter = require("./routes/signin.route")
const Loginrouter =require("./routes/login.route");
// const { validate } = require("./model/auth.model");
const exerciseRoutes = require("./routes/userExercise.route");
const userFoodRoutes =require("./routes/userFood.route")
const authentication = require("./middleware/Authentications");
const cors = require("cors")
require("dotenv").config();
const app = express()

app.use(express.json())
// app.use(validate)
app.use(cors())
app.use("/auth",Loginrouter)
app.use("/auth",Signinrouter)
app.use(authentication)
app.use("/crono",exerciseRoutes)
app.use("/food",userFoodRoutes)



const PORT = process.env.PORT || 8000
app.get("/",(req,res)=>{
    res.send("heroku deployments")
})
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

