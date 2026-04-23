import React from "react";
import api from "../api";

function BlogList({ blogs, fetchBlogs, setEditBlog }) {

    const deleteBlog = async (id) => {
        await api.delete(`/${id}`);
        fetchBlogs();
    };

    return (
        <div>
            {blogs.map(blog => (
                <div key={blog._id} className="blog-card">
                    <div className="blog-title">{blog.title}</div>
                    <div className="blog-author">By {blog.author}</div>
                    <p>{blog.content}</p>

                    <div className="blog-actions">
                        <button onClick={() => setEditBlog(blog)}>Edit</button>
                        <button onClick={() => deleteBlog(blog._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BlogList;