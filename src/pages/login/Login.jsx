import React from "react";
import LoginForm from "../../components/LoginForm";
import UserConsumer from "../../context";

export default function Login() {
  return (
    <UserConsumer>
      {({ state }) => {
        return <LoginForm props={state} />;
      }}
    </UserConsumer>
  );
}
