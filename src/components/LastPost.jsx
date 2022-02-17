import React from "react";
import UserConsumer from "../context";

export default function LastPost() {
  return (
    <UserConsumer>
      {({ state }) => {
        return (
          <div className="container w-75 pt-5">
              {
                  state.blogPost.map(i=>(
                    <div className="card mb-3">
                    <div className="card-header">{i.title}</div>
                    <div className="card-body">
                      <p className="card-text">
                        {
                            i.post
                        }
                      </p>
                    </div>
                  </div>
                  ))
              }
            {/* <div className="card">
              <div className="card-header">{state.blogPost[state.blogPost.length-1].title}</div>
              <div className="card-body">
                <p className="card-text">
                  {
                      state.blogPost[state.blogPost.length-1].post
                  }
                </p>
              </div>
            </div> */}
          </div>
        );
      }}
    </UserConsumer>
  );
}
