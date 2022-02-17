import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserConsumer from "../context";
import "./loginform.css";

export default function LoginForm({ props }) {
  let navigate = useNavigate();
  console.log(props);
  useEffect(() => {
    console.log(props.userInfo.confirmPassword === props.userInfo.password);
    if (props.navHome) {
      navigate("/");
    }
  }, [props.loginCheck]);
  return (
    <UserConsumer>
      {({ submitLog }) => {
        return (
          <div className="container d-flex flex-column justify-content-center align-items-center w-50">
            <form
              className="formClass p-5 d-flex flex-column"
              onSubmit={submitLog}
            >
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>

              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </form>
          </div>
        );
      }}
    </UserConsumer>
  );
}
