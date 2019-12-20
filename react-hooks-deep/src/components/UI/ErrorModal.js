/**
 * @fileoverview Description of this file.
 */
import React from "react";
import Styles from './ErrorModal.module.css';

const ErrorModal = React.memo((props) => {
  return (
    <React.Fragment>
      <div className={Styles["backdrop"]} onClick={props.onClose}></div>
      <div className={Styles["error-modal"]}>
        <h3>An Error Occured</h3>
        <p>{props.children}</p>
        <div className={Styles["error-modal_actions"]}>
          <button type="button" onClick={props.onClose}>Ok</button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default ErrorModal;
