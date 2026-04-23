import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({
    title: "",
    author: "",
    content: ""
  });

  const API = "http://localhost:5000/api/blogs";

  const fetchBlogs = async () => {
    const res = await axios.get(API);
    setBlogs(res.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API, form);
    setForm({ title: "", author: "", content: "" });
    fetchBlogs();
  };

  const deleteBlog = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchBlogs();
  };

  return (
    <div className="app-container">
      <div className="card">

        <h1 className="title">📝 Blog App</h1>

        {/* FORM */}
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

          <button>➕ Add Blog</button>
        </form>

        {/* BLOG LIST */}
        {blogs.map(blog => (
          <div key={blog._id} className="blog-card">
            <div className="blog-title">{blog.title}</div>
            <div className="blog-author">By {blog.author}</div>
            <p>{blog.content}</p>

            <div className="blog-actions">
              <button onClick={() => deleteBlog(blog._id)}>
                🗑 Delete
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;