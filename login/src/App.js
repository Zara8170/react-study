import React from "react";
import { useSelector } from "react-redux";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Logout from "./Components/Logout";

const App = () => {
  const { email, isAuthenticated } = useSelector((state) => state.auth.auth);

  return (
    <div>
      <h1>Authentication App</h1>
      {!isAuthenticated ? (
        <>
          <SignUp />
          <Login />
        </>
      ) : (
        <>
          <h2>Welcome, {email}</h2>
          <Logout />
        </>
      )}
    </div>
  );
};

export default App;
