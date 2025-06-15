const sequelize =require("./utils/database")
const express = require("express")
const path = require("path")
const app = express()
const postRouter = require("./routes/post")
const {adminRouter}=require("./routes/admin")
const bodyParser = require("body-parser")
const db = require("./utils/database")
const Post = require("./models/posts")
const user = require("./models/user")

app.set("view engine","ejs")
app.set("views","views")
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

app.use("/post",(req,res,next)=>{
    console.log("i am middleware one");
    next()
})
app.use((req,res,next)=>{
    user.findByPk(1).then((auser)=>{
        req.user =auser
        next()
    }).catch(err=>console.log(err))
})
app.use("/admin",(req,res,next)=>{
    console.log("admin middleware appreve");
    next()
    
})
app.use("/admin",adminRouter);
app.use(postRouter);

Post.belongsTo(user,{constraints : true, onDelete : "CASCADE"})
user.hasMany(Post)
sequelize.sync().then((result)=>{
    return user.findByPk(1)
}).then((users)=>{
    if(!users){
        return user.create({name:"Aung Heein Zay",email:"ahz007aunghz@gmail.com",})
    }
    return users;
    
}).then((users)=>{
    console.log(users);
    app.listen(3000)
    
}).catch(err=>console.log(err)
)
