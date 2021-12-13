import React, { useReducer } from "react";

import classes from "./Input.module.css";

//pure rubbish here
const Input = (props) => {
  const [inputState, dispatchInput] = useReducer(props.inputReducer, {
    value: "",
    isValid: null,
  });

  const inputChangeHandler = (event) => {
    dispatchInput({ val: event.target.value, type: "USER_INPUT" });
    props.onChange(inputState);
  };

  const inputValidateHandler = () => {
    dispatchInput({ type: "INPUT_BLUR" });
  };

  return (
    <div
      className={`${classes.control} ${
        inputState.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>Password</label>
      <input
        type={props.type}
        id={props.id}
        value={inputState.value}
        onChange={inputChangeHandler}
        onBlur={inputValidateHandler}
      />
    </div>
  );
};

export default Input;
