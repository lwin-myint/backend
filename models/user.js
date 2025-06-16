const mongoose = require("mongoose")

const {model,Schema} =mongoose

const userSchema = new Schema({
    username:{
        type:String,
        unique : true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        minLength:3,
    },
    password:{
        type:String,
        required:true,
        minLength:4
    }
})

module.exports = model("User",userSchema)