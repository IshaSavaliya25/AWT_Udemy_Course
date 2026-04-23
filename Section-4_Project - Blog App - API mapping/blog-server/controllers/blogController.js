const Blog = require("../models/Blog");

// Create
exports.createBlog = async (req, res) => {
    const blog = new Blog(req.body);
    const saved = await blog.save();
    res.json(saved);
};

// Get All
exports.getBlogs = async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
};

// Get One
exports.getBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
};

// Update
exports.updateBlog = async (req, res) => {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(blog);
};

// Delete
exports.deleteBlog = async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
};