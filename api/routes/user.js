const express = require("express");
const router = express.Router();
const {
  users,
  userById,
  userPosts,
  editUser,
 deleteUser
} = require("../controllers/userControllers");


router.get("/", users);
router.get("/:id", userById);
router.get("/:id/posts/", userPosts);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);




module.exports = router;
