import React from "react";
import RegisterForm from "../../components/RegisterForm";
import UserConsumer from "../../context";

export default function Register() {
  return (
    <UserConsumer>
      {({ state }) => {
        return <RegisterForm props={state} />;
      }}
    </UserConsumer>
  );
}
