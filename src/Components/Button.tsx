import React from 'react';
import classes from "../App.module.css";

type ButtonPropsType = {
  callBack: () => void
  buttonName: string
  counter: boolean
}

export const Button = (props: ButtonPropsType) => {
  return (
    <div>
      <button className={classes.btn} onClick={props.callBack} disabled={props.counter}>{props.buttonName}</button>
    </div>
  );
};
