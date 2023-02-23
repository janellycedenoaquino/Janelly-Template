import React, { useState } from "react";
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

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  console.log(theme);
  return (
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
              href={"/singIn"}
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
