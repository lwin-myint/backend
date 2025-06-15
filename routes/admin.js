const { log } = require("console")
const express = require("express")
const router = express.Router()
const path = require("path")
const postController = require("../controller/posts")


router.get("/createPost",postController.renderCreatePost)
router.get("/post-edit/:postId",postController.renderEditPost)
router.post("/",postController.createPost)
router.post("/edit-post",postController.updatePost);
router.post("/post/:postId",postController.deletePost)
module.exports = {adminRouter:router}