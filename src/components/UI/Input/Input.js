import React from "react";
import classes from '../Input/Input.css';
const Input = (props) => {
  let InputElement = null;

  switch (props.elementType) {
    case "input":
      InputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value}/>;
      break;
    case "textarea":
      InputElement = <textarea className={classes.InputElement} {...props.elementConfig} value={props.value}/>;
      break;
    default:
      InputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value}/>;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.Label}</label>
      {InputElement}
    </div>
  );
};
export default Input;
