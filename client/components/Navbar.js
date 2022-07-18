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
import AccountBoxIcon from "@mui/icons-material/AccountBox";

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
            <AccountBoxIcon
              sx={{ transform: "scale(1)" }}
              onClick={() => {
                "hello i was clicked";
              }}
            />
          </div>
          {medium ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Name of shop
              </Typography>
            </>
          ) : (
            <>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                {<Link to={`/singIn`}>Sign In</Link>}
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                {<Link to={`/signUp`}>Sign Up</Link>}
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
