import React from 'react';
import classes from './Interface.module.css';

type InterfacePropsType = {
  counter: number
  maxValue: number
  minValue: number
}

export const Interface = (props: InterfacePropsType) => {

  const getActualValue = (props: InterfacePropsType) => {

    if (props.minValue < 0 || props.minValue >= props.maxValue) {
      return (
        <p className={classes.errorText}> Incorrect <br/> value! </p>
      )
    }
    return (
      <p>{props.counter}</p>
    )
  }
  return (
    <div className={classes.counterInterface}>
      <h1 className={props.counter === props.maxValue ? classes.counterRed : classes.interface}>
        {getActualValue(props)}
      </h1>
    </div>
  );
};