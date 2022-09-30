import React from "react";
import classes from "../Modal/Modal.css";

const Modal = (props) => (
    <div className={classes.Modal}>
    {/* <div > */}
        {props.children}
    </div>
);
export default Modal;