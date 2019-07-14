/**
 * @fileoverview Auth
 */
import React, { FC, useContext } from "react";
import AuthContext from "../auth-context";

const Auth: FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <button onClick={authContext.login}>Log In</button>
  );
};

export default Auth;
