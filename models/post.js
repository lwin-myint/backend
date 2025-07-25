const mongoose = require("mongoose")

const{model,Schema} = mongoose

const postSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image_url:{
        type:String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
})

module.exports = model("post",postSchema)