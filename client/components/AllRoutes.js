import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

class AllRoutes extends Component {
  render() {
    const { user, firstName } = this.props;
    return (
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home user={user} firstName={firstName} />}
          />
          <Route path="/signIn" element={<LogIn user={user} />} />
          <Route path="/signUp" element={<SignUp user={user} />} />
          <Route
            path="/forgotPassword"
            element={<ForgotPassword user={user} />}
          />
        </Routes>
      </div>
    );
  }
}
export default AllRoutes;
