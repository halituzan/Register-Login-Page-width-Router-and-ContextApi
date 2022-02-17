import React from "react";

export default function BlogForm({submitBlogPost}) {
  return (
    <form className="d-flex flex-column justify-content-start align-items-center text-center" onSubmit={submitBlogPost}>
      <div className="mb-3 w-75">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Blog Title"
          id="title"
          name="title"
        />
      </div>
      <div className="mb-3 w-75">
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a blog post text here"
            id="post"
            name="post"
          ></textarea>
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-75">
        Send
      </button>
    </form>
  );
}
