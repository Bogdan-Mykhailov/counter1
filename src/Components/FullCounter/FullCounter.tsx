import React from 'react';
import {Interface} from "../Interface/Interface";
import classes from './FullCounter.module.css';
import {Button} from "../Button/Button";
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import {incrementValueAC, resetValueAC} from "../../BLL/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../BLL/store";

type FullCounterPropsType = {
  maxValue: number
  minValue: number
  isError: boolean
  setError: (isError: boolean) => void
  setCollapsed: (collapsed: boolean) => void
  switcher: boolean
}

export const FullCounter = (props: FullCounterPropsType) => {

  const value = useSelector<AppStateType, number>( state => state.counter.value)
  const dispatch = useDispatch()

  const onClickAddHandler = () => {
    dispatch(incrementValueAC())
  }
  const onClickResetButtonHandler = () => {
    dispatch(resetValueAC(props.minValue))
  }
  const changeInterfaceHandler = () => {
    props.setCollapsed(false)
  }

  const addConditions =
    value === props.maxValue ||
    props.maxValue < props.minValue ||
    props.minValue < 0 ||
    props.maxValue === props.minValue ||
    props.maxValue < value;

  const resetConditions =
   value > props.maxValue ||
    props.minValue >= props.maxValue ||
    props.minValue < 0;

  return (
    <div className={classes.fullCounter}>
      <Interface
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