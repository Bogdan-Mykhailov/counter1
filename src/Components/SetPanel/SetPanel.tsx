import React, {ChangeEvent} from 'react';
import classes from './SetPanel.module.css'
import {Button} from "../Button/Button";
import {useDispatch} from "react-redux";
import {setValueAC} from "../../BLL/counter-reducer";

type SetPanelPropsType = {
  inputValue1: number
  setInputValue1: (inputValue1: number) => void
  inputValue2: number
  setInputValue2: (inputValue2: number) => void
  minValue: number
  maxValue: number
  isError: boolean
  setError: (isError: boolean) => void
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}

export const SetPanel = (props: SetPanelPropsType) => {


  const dispatch = useDispatch()


  const onChangeInputHandler1 = (event: ChangeEvent<HTMLInputElement>) => {
    props.setInputValue1(Number(event.currentTarget.value))
  };

  const onChangeInputHandler2 = (event: ChangeEvent<HTMLInputElement>) => {
    props.setInputValue2(Number(event.currentTarget.value))
  };

  const onClickSetButtonHandler = () => {
    dispatch(setValueAC(props.minValue))
    //props.setCounter(props.counter)  // ??????????
    props.setError(false)
    props.setCollapsed(true)
  };

  const inputCondition = props.minValue < 0 || props.minValue >= props.maxValue
    ? classes.incorrectCondition
    : classes.correctCondition;

  const setButtonDisableCondition = props.minValue < 0 || props.maxValue <= props.minValue;

  return (
    <div className={classes.setPanel}>
      <div>
        <div className={classes.inputInterface}>

          <h3>Max value:</h3>

          <input className={inputCondition}
                 value={props.inputValue1}
                 onChange={onChangeInputHandler1}
                 type="number"
          />
        </div>

        <div className={classes.inputInterface}>

          <h3>Min value:</h3>

          <input className={inputCondition}
                 value={props.inputValue2}
                 onChange={onChangeInputHandler2}
                 type="number"
          />
        </div>

      </div>
      <Button callBack={onClickSetButtonHandler}
              buttonName='Set'
              counter={setButtonDisableCondition}
      />
    </div>
  );
};