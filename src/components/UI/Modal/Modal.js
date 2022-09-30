import React from "react";
import classes from "../Modal/Modal.css";
import Aux from "../../../hoc/Aux1/Aux1";
import Backdrop from "../Backdrop/Backdrop";
const Modal = (props) => (
    <Aux>
    <Backdrop 
    show={props.show} 
     clicked={props.modalClosed}/>
        <div className={classes.Modal}
    style={{transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity: props.show ? '1': '0'}}>
    {/* <div > */}
        {props.children}
    </div>
    </Aux>
);
export default Modal;