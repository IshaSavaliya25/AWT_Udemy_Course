const express = require("express");
const router = express.Router();
const blogCtrl = require("../controllers/blogController");

router.post("/", blogCtrl.createBlog);
router.get("/", blogCtrl.getBlogs);
router.get("/:id", blogCtrl.getBlog);
router.put("/:id", blogCtrl.updateBlog);
router.delete("/:id", blogCtrl.deleteBlog);

module.exports = router;