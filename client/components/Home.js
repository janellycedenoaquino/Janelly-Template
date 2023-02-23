import React from "react";
import { Box } from "@mui/material";

const Home = () => {
  const style1 = {
    fontSize: 50,
    color: "#063970",
    textAlign: "center",
    paddingTop: "100px",
  };

  const style2 = {
    fontSize: 35,
    color: "gray",
    textAlign: "center",
  };
  return (
    <div>
      <div style={style1}>Welcome to the home page</div>
      <div style={style2}>edit me pls</div>
    </div>
  );
};

export default Home;
