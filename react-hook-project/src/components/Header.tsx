/**
 * @fileoverview Header component
 */
import React, { FC, useContext } from "react";
import AuthContext from "../auth-context";
import { Link } from "react-router-dom";

type Props = {
  onLoadTodos: (event: React.MouseEvent<HTMLButtonElement>) => void
  onLoadAuth: (event: React.MouseEvent<HTMLButtonElement>) => void
};

const Header: FC<Props> = (props) => {
  const authContext = useContext(AuthContext);

  let todo = (
    <React.Fragment>
      <Link to="/todo">
        <button onClick={props.onLoadTodos}>Todo List</button>
      </Link>
      &nbsp;|&nbsp;
      <Link to="/todoref">
        <button>Todo Ref</button>
      </Link>
      &nbsp;|&nbsp;
      <Link to="/todocustomhook">
        <button>Todo Custom Hook</button>
      </Link>
      &nbsp;|&nbsp;
      <Link to="/inputtext">
        <button>Input Text</button>
      </Link>
      &nbsp;|&nbsp;
      <Link to="/error">
        <button>See Error?</button>
      </Link>
      &nbsp;|&nbsp;
      <Link to="/playground">
        <button>Play Ground</button>
      </Link>
      &nbsp;|&nbsp;
      <Link to="/layout">
        <button>Layout</button>
      </Link>
      &nbsp;|&nbsp;
      <Link to="/signin">
        <button>Sign In</button>
      </Link>
      &nbsp;|&nbsp;
      <Link to="/rescind">
        <button onClick={authContext.logout}>Logout</button>
      </Link>
    </React.Fragment>
  );
  return (
    <header>
      {authContext.status ? todo : null}
      <button onClick={props.onLoadAuth}>Auth</button>
    </header>
  );
};

export default Header;
