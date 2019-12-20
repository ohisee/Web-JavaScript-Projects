/**
 * @fileoverview Navigation component.
 */
import React from "react";
import { NavLink } from "react-router-dom";
import Styles from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <header className={Styles["main-header"]}>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>All Products</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
