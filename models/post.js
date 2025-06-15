const { logger } = require("sequelize/lib/utils/logger")
const {getDatabase} =require("../utils/database")
class Post{
    constructor(title,description,image_url){
        this.title = title
        this.description = description
        this.image_url = image_url
    }
    create(){
        const db = getDatabase()
        return db.collection("posts").insertOne(this)
        .then((res=>console.log(res)
        )).catch(err=>console.log(err)
        )
    }
    static getPosts(){
        const db = getDatabase()
        return db.collection("posts").find().toArray()
        .then((result)=>{
            return result
        }).catch(err=>console.log(err)
        )
    }
    static getPost(postid){
        const db=getDatabase()
        return db.collection("posts").find({_id:postid}).next()
        .then(result=>{
            return result
        }).catch(err=>console.log(err)
        )
    }
}

module.exports = Post