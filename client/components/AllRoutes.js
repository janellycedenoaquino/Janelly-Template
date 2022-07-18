import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

class AllRoutes extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/singIn" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    );
  }
}
export default AllRoutes;
