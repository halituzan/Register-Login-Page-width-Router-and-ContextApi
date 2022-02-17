import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context";
import Header from "./components/Header";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>

      </Router>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
