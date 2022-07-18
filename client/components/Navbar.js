import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   AppBar,
//   Button,
//   Tab,
//   Tabs,
//   Toolbar,
//   Typography,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import HamburgerNav from "./HamburgerNav";

// const pages = [
//   { Home: "/" },
//   { "Sign In": "Sign-In" },
//   { "Sign Up": "Sign Up" },
// ];
// import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";

// const Navbar = () => {
//   const [value, setValue] = useState();
//   const [openDrawer, setOpenDrawer] = useState(false);

//   const theme = useTheme();
//   console.log(theme);
//   const medium = useMediaQuery(theme.breakpoints.down("md"));
//   console.log(medium);
//   return (
//     <div>
//       <AppBar sx={{ background: "#063970" }}>
//         <Toolbar>
//           <div>
//             <ShoppingCartIcon
//               sx={{ transform: "scale(1)" }}
//               onClick={() => {
//                 "hello i was clicked";
//               }}
//             />
//           </div>
//           {medium ? (
//             <>
//               <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
//                 Name of shop
//               </Typography>
//               <HamburgerNav />
//             </>
//           ) : (
//             <>
//               <Tabs
//                 sx={{ marginLeft: "auto" }}
//                 indicatorColor="secondary"
//                 textColor="inherit"
//                 value={value}
//                 onChange={(e, value) => setValue(value)}
//               >
//                 <Tab label="Home" />
//                 <Tab label="EXAMPLE" />
//                 <Tab label="EXAMPLE" />
//               </Tabs>
//               <Button sx={{ marginLeft: "auto" }} variant="contained">
//                 {<Link to={`/singIn`}>Sign In</Link>}
//               </Button>
//               <Button sx={{ marginLeft: "10px" }} variant="contained">
//                 {<Link to={`/signUp`}>Sign Up</Link>}
//               </Button>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>

//       {/* <nav>
//         <Link to="/">Home</Link>
//         <Link to="/singIn">Sign In</Link>
//         <Link to="/signUp">Sing Up</Link>
//       </nav> */}
//     </div>
//   );
// };

function Navbar() {
  return <h1>Navbar</h1>;
}

export default Navbar;
