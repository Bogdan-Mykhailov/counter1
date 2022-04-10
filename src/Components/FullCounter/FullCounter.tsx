import React from 'react';
import {Interface} from "../Interface/Interface";
import classes from './FullCounter.module.css';
import {Button} from "../Button/Button";
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';

type FullCounterPropsType = {
  counter: number
  setCounter: (counter: number) => void
  maxValue: number
  minValue: number
  isError: boolean
  setError: (isError: boolean) => void
  setCollapsed: (collapsed: boolean) => void
  switcher: boolean
}

export const FullCounter = (props: FullCounterPropsType) => {

  const onClickAddHandler = () => {
    props.setCounter(props.counter + 1)
  }
  const onClickResetButtonHandler = () => {
    props.setCounter(props.minValue)
  }
  const changeInterfaceHandler = () => {
    props.setCollapsed(false)
  }

  const addConditions =
    props.counter === props.maxValue ||
    props.maxValue < props.minValue ||
    props.minValue < 0 ||
    props.maxValue === props.minValue ||
    props.maxValue < props.counter;

  const resetConditions =
    props.counter > props.maxValue ||
    props.minValue >= props.maxValue ||
    props.minValue < 0;

  return (
    <div className={classes.fullCounter}>
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
                    counter={addConditions}
            />

            {props.switcher
              ? <div className={classes.setBtn}>
                <DisplaySettingsOutlinedIcon onClick={changeInterfaceHandler}/>
              </div>
              : <></>}

            <Button callBack={onClickResetButtonHandler}
                    buttonName='Reset'
                    counter={resetConditions}
            />
          </div>
        </div>
      </div>
    </div>
  );
};