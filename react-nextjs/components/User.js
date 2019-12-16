/**
 * @fileoverview User component
 */
import React from "react";

const User = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Title: {props.title}</p>
      <style jsx>{`
        div {
          boder-bottom: 1px solid #ccc;
          box-shadow: 0 2px 3px #ccc;
          padding: 16px;
          width: 30%;
        }
      `}</style>
    </div>
  )
};

export default User;
