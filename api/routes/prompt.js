const express = require("express");
const router = express.Router();
const {
  createPost,
  posts,
  editPost,
  deletePost,
  post,
} = require("../controllers/promptController");


router.post("/new",  createPost );
router.get("/", posts);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.get("/:id", post);




module.exports = router;
