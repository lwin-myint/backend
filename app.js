
const express = require("express")
const path = require("path")
const app = express()
const postRouter = require("./routes/post")
const {adminRouter}=require("./routes/admin")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const User = require("./models/user")
const dotenv =require("dotenv").config()
const authRouter = require("./routes/auth")
app.set("view engine","ejs")
app.set("views","views")
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

//export the user at every route 
// middleware
app.use((req,res,next)=>{
    User.findById('684fb32ae200f6ce2f3c2295')
    .then((user)=>{
        req.user=user
        next()
    }).catch(err=>console.log(err))
})


app.use("/admin",adminRouter);
app.use(postRouter);
app.use(authRouter)
mongoose.connect(process.env.MONGODB_URL).then((result)=>{
    console.log("connection success");
    app.listen(3000)
    return User.findOne().then((user)=>{
        if(!user){
           User.create({
                username:"aung heein zay",
                email:"ahz007aunghz@gmail.com",
                password:"Aung1234"})
        }
        return user
    })
}).then((user)=>{
    console.log(user);
    
}).catch(err=>console.log(err))
