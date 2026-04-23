import React, { useState, useEffect } from "react";
import api from "../api";

function BlogEdit({ editBlog, fetchBlogs, setEditBlog }) {
    const [form, setForm] = useState(editBlog);

    useEffect(() => {
        setForm(editBlog);
    }, [editBlog]);

    const handleUpdate = async () => {
        await api.put(`/${form._id}`, form);
        fetchBlogs();
        setEditBlog(null);
    };

    return (
        <div>
            <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <input
                value={form.author}
                onChange={(e) => setForm({ ...form, author: e.target.value })}
            />
            <textarea
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
            />

            <button className="btn-update" onClick={handleUpdate}>
                ✅ Update Blog
            </button>
        </div>
    );
}

export default BlogEdit;