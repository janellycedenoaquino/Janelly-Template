import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const pages = [
  { Home: "/" },
  { "Sign In": "Sign-In" },
  { "Sign Up": "Sign Up" },
];
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  const theme = useTheme();
  console.log(theme);
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  console.log(medium);
  return (
    <div>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <div>
            <HomeIcon
              sx={{ transform: "scale(1)" }}
              onClick={() => {
                "hello i was clicked";
              }}
            ></HomeIcon>
          </div>
          {medium ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Name of shop
              </Typography>
            </>
          ) : (
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
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
