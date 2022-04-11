import React, {ChangeEvent} from 'react';
import classes from './SetPanel.module.css'
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {collapsedAC, errorAC, maxValueAC, minValueAC, setValueAC} from "../../BLL/counter-reducer";
import {AppStateType} from "../../BLL/store";

export const SetPanel = () => {

  const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);
  const minValue = useSelector<AppStateType, number>(state => state.counter.minValue);

  const dispatch = useDispatch();

  const onChangeInputHandler1 = (event: ChangeEvent<HTMLInputElement>) => {
    const maxValue = Number(event.currentTarget.value)
    dispatch(maxValueAC(maxValue))
  };
  const onChangeInputHandler2 = (event: ChangeEvent<HTMLInputElement>) => {
    const minValue = Number(event.currentTarget.value)
    dispatch(minValueAC(minValue))
  };
  const onClickSetButtonHandler = () => {
    dispatch(setValueAC(minValue))
    dispatch(errorAC(false))
    dispatch(collapsedAC(true))
  };

  const inputCondition = minValue < 0 || minValue >= maxValue
    ? classes.incorrectCondition
    : classes.correctCondition;

  const setButtonDisableCondition = minValue < 0 || maxValue <= minValue;

  return (
    <div className={classes.setPanel}>
      <div>
        <div className={classes.inputInterface}>

          <h3>Max value:</h3>

          <input
            className={inputCondition}
            value={maxValue}
            onChange={onChangeInputHandler1}
            type="number"
          />
        </div>

        <div className={classes.inputInterface}>

          <h3>Min value:</h3>

          <input
            className={inputCondition}
            value={minValue}
            onChange={onChangeInputHandler2}
            type="number"
          />
        </div>

      </div>
      <Button
        callBack={onClickSetButtonHandler}
        buttonName='Set'
        counter={setButtonDisableCondition}
      />
    </div>
  );
};