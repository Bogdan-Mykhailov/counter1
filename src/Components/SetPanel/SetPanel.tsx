import React, {ChangeEvent} from 'react';
import classes from './SetPanel.module.css'
import {Button} from "../Button/Button";

type SetPanelPropsType = {
  counter: number
  setCounter: (counter: number) => void
  inputValue1: number
  setInputValue1: (inputValue1: number) => void
  inputValue2: number
  setInputValue2: (inputValue2: number) => void
  minValue: number
  maxValue: number
}

export const SetPanel = (props: SetPanelPropsType) => {

  const onChangeInputHandler1 = (event: ChangeEvent<HTMLInputElement>) => {
    props.setInputValue1(Number(event.currentTarget.value))
  }
  const onChangeInputHandler2 = (event: ChangeEvent<HTMLInputElement>) => {
    props.setInputValue2(Number(event.currentTarget.value))
  }

  const onClickSetButtonHandler = () => {
    props.setCounter(props.counter)
    props.setCounter(props.inputValue2)
  }

  const inputCondition = 'error' ? classes.incorrectCondition : classes.correctCondition

  return (
    <div className={classes.setPanel}>
      <div>
        <div className={classes.inputInterface}>

          <h3>max value:</h3>

          <input value={props.inputValue1}
                 onChange={onChangeInputHandler1}
                 type="number"/>
        </div>
        <div className={classes.inputInterface}>

          <h3>min value:</h3>

          <input className={inputCondition}
                 value={props.inputValue2}
                 onChange={onChangeInputHandler2}
                 type="number"/>
        </div>
      </div>

      <Button callBack={onClickSetButtonHandler}
              buttonName='Set'
              counter={
                props.minValue < 0 ||
                props.maxValue <= props.minValue
              }/>
    </div>
  );
};