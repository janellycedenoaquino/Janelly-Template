import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";

const App = () => {
  const [user, setUser] = useState({});

  const firstName =
    user?.firstName?.toUpperCase()[0] + user?.firstName?.slice(1);

  useEffect(() => {
    async function userLoggedIn() {
      const token = window.localStorage.getItem("token");
      if (token) {
        const res = await axios.get(`/api/users/me`, {
          headers: {
            authorization: token,
          },
        });
        setUser(res.data);
      }
    }
    userLoggedIn();
  }, []);

  return (
    <div>
      <Navbar user={user} firstName={firstName} />
      <AllRoutes user={user} firstName={firstName} />
    </div>
  );
};

export default App;
