import React from 'react';
import classes from './Interface.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../BLL/store";
import {errorAC} from "../../BLL/counter-reducer";

export const Interface = () => {

  const value = useSelector<AppStateType, number>(state => state.counter.value);
  const isError = useSelector<AppStateType, boolean>(state => state.counter.isError);
  const minValue = useSelector<AppStateType, number>(state => state.counter.minValue);
  const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);

  const dispatch = useDispatch();

  const getActualValue = () => {

    if (minValue < 0 || minValue >= maxValue) {
      dispatch(errorAC(true))
      return <p className={classes.errorText}> Incorrect <br/> value! </p>
    }
    if (isError) {
      return <p className={classes.correctText}>Insert new value and press 'Set'</p>
    }
    return <p>{value}</p>
  };

  return (
    <div className={classes.counterInterface}>
      <h1 className={value === maxValue
        ? classes.counterRed
        : classes.interface}>
        {getActualValue()}
      </h1>
    </div>
  );
};