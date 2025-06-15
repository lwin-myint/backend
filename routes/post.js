const express = require("express")
const router = express.Router()
const path = require("path")
const postController = require("../controller/posts")



router.get("/",postController.renderHome)
router.get("/post/:postId",postController.renderDetail)
module.exports=router;

