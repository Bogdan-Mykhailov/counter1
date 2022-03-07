import React from 'react';
import classes from "../App.module.css";

type InterfacePropsType = {
  counter: number
}

export const Interface = (props: InterfacePropsType) => {

  return (
    <div className={classes.counterInterface}>
      <h1 className={props.counter === 5 ? classes.counterRed : classes.interface}>
        {props.counter}
      </h1>
    </div>
  );
};