import React from "react";
import { useNavigate } from "react-router-dom";
import HomePage from "../../components/HomePage";
import UserConsumer from "../../context";
import Login from "../login/Login";

export default function Home() {
  let navigate = useNavigate();
  return (
    <UserConsumer>
      {({ state }) => {
        return state.navHome ? <HomePage /> : <Login/>;
      }}
    </UserConsumer>
  );
}
