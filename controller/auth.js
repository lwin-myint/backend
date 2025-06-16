exports.renderLogin=(req,res)=>{
    res.render("./auth/login")
}

exports.postLogin =(req,res)=>{
    res.setHeader('Set-Cookie','isLogIn=true')
    res.redirect("/")
}