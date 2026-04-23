import React, { useState } from "react";
import api from "../api";

function BlogForm({ fetchBlogs }) {
    const [form, setForm] = useState({ title: "", content: "", author: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post("/", form);
        fetchBlogs();
        setForm({ title: "", content: "", author: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row">
                <input
                    placeholder="Title"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
                <input
                    placeholder="Author"
                    value={form.author}
                    onChange={(e) => setForm({ ...form, author: e.target.value })}
                />
            </div>

            <textarea
                placeholder="Content"
                value={form.content}
                onChange={(e) => setForm({ ...form, content: e.target.value })}
            />

            <br />

            <button>➕ Add Blog</button>
        </form>
    );
}

export default BlogForm;