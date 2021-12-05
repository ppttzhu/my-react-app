import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

function AddUser(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState(null);

  function addUserHandler(event) {
    event.preventDefault(false);
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a non-empty value",
      });
      return;
    }
    if (+enteredUserAge < 0) {
      setError({
        title: "Invalid age",
        message: "Please enter a non-negative age",
      });
      return;
    }

    setEnteredUserName("");
    setEnteredUserAge("");
    props.onAddUser(enteredUserName, enteredUserAge);
  }

  function errorModalDismissHandler() {
    setError(null);
  }

  function userNameChangedHanlder(event) {
    setEnteredUserName(event.target.value);
  }

  function userAgeChangedHanlder(event) {
    setEnteredUserAge(event.target.value);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorDismissed={errorModalDismissHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUserName}
            onChange={userNameChangedHanlder}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={enteredUserAge}
            onChange={userAgeChangedHanlder}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
