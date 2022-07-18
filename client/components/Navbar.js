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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const pages = [
  { Home: "/" },
  { "Sign In": "Sign-In" },
  { "Sign Up": "Sign Up" },
];
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";

const Navbar = () => {
  const [value, setValue] = useState();
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  console.log(theme);
  const medium = useMediaQuery(theme.breakpoints.down("md"));
  console.log(medium);
  return (
    <div>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <div>
            <AccountCircleIcon />
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
