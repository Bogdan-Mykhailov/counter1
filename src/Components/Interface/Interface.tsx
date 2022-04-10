import React from 'react';
import classes from './Interface.module.css';

type InterfacePropsType = {
  counter: number
  maxValue: number
  minValue: number
  isError: boolean
  setError: (isError: boolean) => void
}

export const Interface = (props: InterfacePropsType) => {

  const getActualValue = (props: InterfacePropsType) => {

    if (props.minValue < 0 || props.minValue >= props.maxValue) {
      props.setError(true)
      return <p className={classes.errorText}> Incorrect <br/> value! </p>
    }
    if (props.isError) {
      return <p className={classes.correctText}>Insert new value and press 'Set'</p>
    }
    return <p>{props.counter}</p>
  };

  return (
    <div className={classes.counterInterface}>
      <h1 className={props.counter === props.maxValue
        ? classes.counterRed
        : classes.interface}>
        {getActualValue(props)}
      </h1>
    </div>
  );
};