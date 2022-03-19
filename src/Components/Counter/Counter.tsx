import React from 'react';
import {Interface} from "../Interface/Interface";
import classes from './Counter.module.css';
import {Button} from "../Button/Button";

type CounterPropsType = {
  counter: number
  setCounter: (counter: number) => void
  maxValue: number
  minValue: number
  isError: boolean
  setError: (isError: boolean) => void

}

export const Counter = (props: CounterPropsType) => {

  const onClickAddHandler = () => {
    props.setCounter(props.counter + 1)
  }
  const onClickResetButtonHandler = () => {
    props.setCounter(props.minValue)
  }

  return (
    <div className={classes.counter}>
      <Interface counter={props.counter}
                 maxValue={props.maxValue}
                 minValue={props.minValue}
                 setError={props.setError}
                 isError={props.isError}
      />

      <div className={classes.btnWindow}>
        <div className={classes.wrapper}>
          <div className={classes.buttons}>

            <Button callBack={onClickAddHandler}
                    buttonName='Add'
                    counter={
                      props.counter === props.maxValue ||
                      props.maxValue < props.minValue ||
                      props.minValue < 0 ||
                      props.maxValue === props.minValue ||
                      props.maxValue < props.counter
                    }/>

            <Button callBack={onClickResetButtonHandler}
                    buttonName='Reset'
                    counter={
                      props.counter > props.maxValue ||
                      props.minValue >= props.maxValue ||
                      props.minValue < 0
                    }/>
          </div>
        </div>
      </div>
    </div>
  );
};