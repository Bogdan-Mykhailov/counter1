import React from 'react';
import {Interface} from "../Interface/Interface";
import classes from './FullCounter.module.css';
import {Button} from "../Button/Button";
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import {collapsedAC, incrementValueAC, resetValueAC} from "../../BLL/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../BLL/store";

export const FullCounter = () => {

  const value = useSelector<AppStateType, number>(state => state.counter.value);
  const switcher = useSelector<AppStateType, boolean>(state => state.counter.switcher);
  const minValue = useSelector<AppStateType, number>(state => state.counter.minValue);
  const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue);

  const dispatch = useDispatch();

  const onClickAddHandler = () => {
    dispatch(incrementValueAC())
  };
  const onClickResetButtonHandler = () => {
    dispatch(resetValueAC(minValue))
  };
  const changeInterfaceHandler = () => {
    dispatch(collapsedAC(false))
  };

  const addConditions =
    value === maxValue ||
    maxValue < minValue ||
    minValue < 0 ||
    maxValue === minValue ||
    maxValue < value;

  const resetConditions =
    value > maxValue ||
    minValue >= maxValue ||
    minValue < 0;

  return (
    <div className={classes.fullCounter}>
      <Interface/>

      <div className={classes.btnWindow}>
        <div className={classes.wrapper}>
          <div className={classes.buttons}>

            <Button
              callBack={onClickAddHandler}
              buttonName='Add'
              counter={addConditions}
            />

            {switcher
              ? <div className={classes.setBtn}>
                <DisplaySettingsOutlinedIcon onClick={changeInterfaceHandler}/>
              </div>
              : <></>}

            <Button
              callBack={onClickResetButtonHandler}
              buttonName='Reset'
              counter={resetConditions}
            />
          </div>
        </div>
      </div>
    </div>
  );
};