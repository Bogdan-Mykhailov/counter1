import React, {ChangeEvent} from 'react';
import classes from './SetPanel.module.css'
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {collapsedAC, errorAC, maxValueAC, minValueAC, setValueAC} from "../../BLL/counter-reducer";
import {AppStateType} from "../../BLL/store";
import Input from "../Input/Input";

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

          <h3>Click to change <br/> Max value:</h3>

          <Input
            className={inputCondition}
            onChange={onChangeInputHandler1}
            value={maxValue}
          />
        </div>

        <div className={classes.inputInterface}>

          <h3>Click to change <br/> Min value:</h3>

          <Input
            className={inputCondition}
            onChange={onChangeInputHandler2}
            value={minValue}
          />
        </div>

      </div>
      <div className={classes.setButton}>
        <Button
          callBack={onClickSetButtonHandler}
          buttonName='Set'
          counter={setButtonDisableCondition}
        />
      </div>
    </div>
  );
};