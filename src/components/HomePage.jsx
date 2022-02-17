import React from "react";
import UserConsumer from "../context";
import BlogForm from "./BlogForm";
import "./homepage.css";
import LastPost from "./LastPost";

export default function HomePage() {
  return (
    <UserConsumer>
      {({ state, submitBlogPost,showBlogPost }) => {
        console.log(state.blogPost);
        return (
          <div className="d-flex">
            <div className="leftBar w-50">
              <div className="leftTopWrap w-100 border-bottom d-flex flex-column align-items-center py-3">
                <div className="leftTop d-flex justify-content-center align-items-center text-light ">
                  <p className="profileP">
                    {state.userInfo.username.slice(0, 1).toUpperCase()}
                  </p>
                </div>
              </div>
              <div className="leftCenter d-flex flex-column py-3 ps-2">
                <p>
                  Username: <strong>{state.userInfo.username}</strong>
                </p>
                <p>
                  Email: <strong>{state.userInfo.email}</strong>
                </p>
                <p>
                  Birthday: <strong>{state.userInfo.date}</strong>
                </p>
              </div>
              <div className="leftBottom ms-2">
                <div className="header d-flex justify-content-between px-2">
                  <h2>Articles</h2>
                  <button type="button" onClick={()=>showBlogPost()} className="btn btn-warning">+</button>
                </div>
                {state.blogPost.map((i, index) => {
                  return (
                    <h4 key={index}>
                      {index + 1} {i.title}
                      <hr />
                    </h4>
                  );
                })}
              </div>
            </div>
            <div className="rightBar d-flex flex-column justify-content-start mt-2 alignt-items-center">
              {state.homeBlog && state.textArea ? (
                <BlogForm blog={state.blog} submitBlogPost={submitBlogPost} />
              ) : (
                <LastPost />
              )}
            </div>
          </div>
        );
      }}
    </UserConsumer>
  );
}
