const Post = require("../models/post")
const mongoDb = require("mongodb")
exports.createPost=(req,res)=>{
    const {title,description,photo} = req.body
    const post = new Post(title,description,photo)
    post.create().then((result)=>{
        console.log(result);
        res.redirect("/")
    }).catch(err=>console.log(err)
    )
}

exports.renderCreatePost=(req,res)=>{
    res.render("createPost")
}

exports.renderHome=(req,res)=>{
    Post.getPosts().then((post)=>{
        res.render("home",{post})
    }).catch(err=>console.log(err)
    )
}
exports.renderDetail=(req,res)=>{
  const {postId} =req.params
  console.log(postId);
  
  Post.getPost(new mongoDb.ObjectId(postId))
  .then((post)=>{
    res.render("details",{post})
  }).catch(err=>console.log(err)
  )

    
}

exports.deletePost=(req,res)=>{
    const {postId} = req.params
    Post.findByPk(Number(postId)).then((result)=>{
        return result.destroy()
    }).then((_)=>{
        res.redirect("/")
    }).catch(err=>console.log(err)
    )

}

exports.renderEditPost=(req,res)=>{
    const {postId} =req.params
  console.log(postId);
  
  Post.getPost(new mongoDb.ObjectId(postId))
  .then((post)=>{
    res.render("editPost",{post})
  }).catch(err=>console.log(err)
  )
}

exports.updatePost=(req,res)=>{
   
    
}