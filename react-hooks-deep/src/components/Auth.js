/**
 * @fileoverview Description of this file.
 */
import React, { useContext } from "react";
import { AuthContext } from "./context/auth-context";
import Card from "./UI/Card";
import Styles from "./Auth.module.css";

const Auth = (props) => {
  const authContext = useContext(AuthContext);
  return (
    <div className={Styles["auth"]}>
      <Card>
        <h3>You are not authorized</h3>
        <p>Please log in to continue</p>
        <button onClick={() => authContext.login()}>Log In</button>
      </Card>
    </div>
  );
};

export default Auth;
