import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserConsumer from "../context";
import "./registerform.css";

export default function RegisterForm({ props }) {
  let navigate = useNavigate();
  console.log(props);
  useEffect(() => {
    console.log(props.userInfo.confirmPassword === props.userInfo.password);
    if (props.userInfo.confirmPassword === props.userInfo.password) {
      navigate("/login");
    }
  }, [props.userInfo]);
  return (
    <UserConsumer>
      {({ submitReg, state }) => {
        return (
          <div className="registerForm d-flex justify-content-center align-items-center">
            <div className="row registerRow">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body py-3">
                    <h5 className="card-title text-center">Sign Up Page</h5>
                    <div className="card-text">
                      <form className="row-cols-1 g-5" onSubmit={submitReg}>
                        <div className="mb-3">
                          <input
                            className="form-control"
                            type="text"
                            name="username"
                            id="username"
                            placeholder="Enter username"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter email"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control"
                            type="date"
                            name="date"
                            id="date"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control"
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            required
                          />
                          <span
                            className={state.passCheck ? "d-block" : "d-none"}
                          >
                            Don't match password
                          </span>
                        </div>
                        <button type="submit" className="btn btn-primary">
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </UserConsumer>
  );
}
