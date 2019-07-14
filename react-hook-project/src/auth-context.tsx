/**
 * @fileoverview React context hook
 */
import React from "react";

type AuthContextType = { status: boolean, login: () => void, logout: () => void }
const authContext = React.createContext<AuthContextType>(
  {
    status: false,
    login: () => { },
    logout: () => { },
  }
);

export default authContext;
