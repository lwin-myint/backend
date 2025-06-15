
const express = require("express")
const path = require("path")
const app = express()
const postRouter = require("./routes/post")
const {adminRouter}=require("./routes/admin")
const bodyParser = require("body-parser")
const {mongodbConnector} = require("./utils/database")


app.set("view engine","ejs")
app.set("views","views")
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

app.use("/post",(req,res,next)=>{
    console.log("i am middleware one");
    next()
})

app.use("/admin",(req,res,next)=>{
    console.log("admin middleware appreve");
    next()
    
})
app.use("/admin",adminRouter);
app.use(postRouter);
mongodbConnector()
app.listen(3000)