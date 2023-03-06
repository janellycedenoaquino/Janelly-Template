import React from "react";

const Home = (props) => {
  const { user, firstName } = props;

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

  return user.firstName ? (
    <div>
      <div style={style1}>Welcome to the home page {firstName}</div>
      <div style={style2}>edit me pls</div>
    </div>
  ) : (
    <div>
      <div style={style1}>Welcome to the home page</div>
      <div style={style2}>edit me pls</div>
    </div>
  );
};

export default Home;
