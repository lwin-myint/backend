const Post = require("../models/post")
exports.createPost=(req,res)=>{
    const {title,description,photo} = req.body
    Post.create({
        title,
        description,
        image_url:photo
    }).then((post)=>{
       res.redirect("/")
    }).catch(err=>console.log(err)
    )
}

exports.renderCreatePost=(req,res)=>{
    res.render("createPost")
}

exports.renderHome=(req,res)=>{
   Post.find().sort({title:1}).then((post)=>{
    res.render("home",{post})
   }).catch(err=>console.log(err)
   )
}
exports.renderDetail=(req,res)=>{
    const {postId} =req.params
    Post.findById(postId).then((post)=>{
        res.render("details",{post})
    }).catch(err=>console.log(err)
    )
}

exports.deletePost=(req,res)=>{
    const {postId} = req.params
    Post.findByIdAndDelete(postId).then((_)=>{
        res.redirect("/")
    }).catch(err=>console.log(err)
    )
}

exports.renderEditPost=(req,res)=>{
    const {postId} =req.params
    Post.findById(postId).then((post)=>{
        res.render("editPost",{post})
    }).catch(err=>console.log(err)
    )

}

exports.updatePost=(req,res)=>{
    const{postId,title,description,photo} = req.body
    Post.findById(postId).then((post)=>{
        post.title=title
        post.description=description,
        post.image_url=photo
        return post.save()
    }).then((_)=>{
        res.redirect(`/post/${postId}`)
    }).catch(err=>console.log(err)
    )
}