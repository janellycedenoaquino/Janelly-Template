import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home.js";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";

const Navbar = (props) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { user, firstName } = props;

  const handleLogOut = () => {
    window.localStorage.removeItem("token");
  };

  return user.firstName ? (
    <div>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <div>Welcome {firstName}</div>
          <>
            <Button
              href={"/"}
              style={{ textDecoration: "none" }}
              sx={{ marginLeft: "auto" }}
              variant="contained"
              onClick={() => {
                console.log("user is trying to log out");
                handleLogOut();
              }}
            >
              log out
            </Button>
          </>
        </Toolbar>
      </AppBar>
    </div>
  ) : (
    <div>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <div>
            <HomeIcon
              style={{ textDecoration: "none" }}
              sx={{ transform: "scale(1)" }}
              onClick={() => {
                navigate("/");
              }}
            ></HomeIcon>
          </div>
          <>
            <Button
              href={"/signIn"}
              style={{ textDecoration: "none" }}
              sx={{ marginLeft: "auto" }}
              variant="contained"
            >
              Sign In
            </Button>
            <Button
              href={"/signUp"}
              sx={{ marginLeft: "10px" }}
              variant="contained"
            >
              Sign Up
            </Button>
          </>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
