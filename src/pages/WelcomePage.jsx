import React from "react";
import Login from "../components/Login";
import { getAuth } from "firebase/auth";

function WelcomePage() {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div>
      <Login />
    </div>
  );
}

export default WelcomePage;
