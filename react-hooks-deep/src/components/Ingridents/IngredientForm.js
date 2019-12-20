/**
 * @fileoverview Description of this file.
 */
import React, { useState } from "react";
import Card from "../UI/Card";
import LoadingIndicator from "../UI/LoadingIndicator";
import Styles from './IngridientForm.module.css';

const IngridientForm = React.memo((props) => {

  const [userInput, setUserInput] = useState({ title: "", amount: "" });
  const [enteredExtra, setEnteredExtra] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    if (userInput.title && userInput.amount) {
      props.onAddIngridient(userInput);
    }
  };

  return (
    <section className={Styles["ingridient-form"]}>
      <Card>
        <form onSubmit={submitHandler}>
          <div className={Styles["form-control"]}>
            <label htmlFor="title">Name</label>
            {/* Use prevUserInput to get the latest user input state */}
            <input
              type="text"
              id="title"
              value={userInput.title}
              onChange={(event) => {
                const newTitle = event.target.value;
                setUserInput((prevUserInput) => ({
                  title: newTitle,
                  amount: prevUserInput.amount,
                }))
              }} />
          </div>
          <div className={Styles["form-control"]}>
            <label htmlFor="amount">Amount</label>
            {/* Use prevUserInput to get the latest user input state */}
            <input
              type="number"
              id="amount"
              value={userInput.amount}
              onChange={(event) => {
                // Bacause we are using closure, need to use a variable to store event.target.value
                const newAmount = event.target.value;
                setUserInput((prevUserInput) => ({
                  amount: newAmount,
                  title: prevUserInput.title,
                }))
              }} />
          </div>
          <div className={Styles["form-control"]}>
            <label htmlFor="extra">Extra</label>
            {/* Independent state */}
            <input
              type="text"
              id="extra"
              value={enteredExtra}
              onChange={(event) => { setEnteredExtra(event.target.value) }} />
          </div>
          <div className={Styles["ingridient-form_actions"]}>
            <button type="submit">Add Ingridient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngridientForm;
