import React, { useRef, useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

function AddUser(props) {
  const [error, setError] = useState(null);
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  function addUserHandler(event) {
    event.preventDefault(false);
    const enteredUserName = nameInputRef.current.name;
    const enteredUserAge = ageInputRef.current.name;
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

    nameInputRef.current.name = "";
    ageInputRef.current.name = "";
    props.onAddUser(enteredUserName, enteredUserAge);
  }

  function errorModalDismissHandler() {
    setError(null);
  }

  return (
    <>
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
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
