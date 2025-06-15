

const Post = require("../models/posts")

exports.createPost=(req,res)=>{
    const{title,description,photo} = req.body;
    req.user.createPost({
        title,
        description,
        image_url:photo,
       
    }).then((result)=>{
        res.redirect("/")
    }).catch(err=>console.log(err))
}

exports.renderCreatePost=(req,res)=>{
    res.render("createPost")
}

exports.renderHome=(req,res)=>{
    Post.findAll({order:[['createdAt','DESC']]}).then((posts)=>{
        res.render("home",{post:posts})
    }).catch(err=>console.log(err))
}
exports.renderDetail=(req,res)=>{
    const {postId} = req.params
    Post.findByPk(Number(postId)).then((post)=>{
        res.render("details",{post})
    }).catch(err=>console.log(err))

    
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
    const {postId} = req.params
    Post.findByPk(Number(postId)).then((post)=>{
        res.render("editPost",{post})
    }).catch(err=>console.log(err)
    )
}

exports.updatePost=(req,res)=>{
    const{title,description,photo,postId}=req.body;
    Post.findByPk(Number(postId)).then((post)=>{
        post.title = title
        post.description = description
        post.image_url = photo

        post.save()
    }).then((_)=>{
        res.redirect("/")
    }).catch(err=>console.log(err)
    )
    
}