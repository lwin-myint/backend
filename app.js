
const express = require("express")
const path = require("path")
const app = express()
const postRouter = require("./routes/post")
const {adminRouter}=require("./routes/admin")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const { log } = require("console")
const dotenv =require("dotenv").config()

app.set("view engine","ejs")
app.set("views","views")
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))



app.use("/admin",adminRouter);
app.use(postRouter);
mongoose.connect(process.env.MONGODB_URL).then((result)=>{
    console.log(result);
    app.listen(3000)
}).catch(err=>console.log(err))
