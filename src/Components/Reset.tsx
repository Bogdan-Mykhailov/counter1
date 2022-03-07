import React from 'react';
import classes from "../App.module.css";

type ResetPropsType = {
  callBack: () => void
  counter: number
  buttonName: string
}

export const Reset = (props: ResetPropsType) => {
  return (
    <div>
      <button className={classes.btn}
              onClick={props.callBack}
              disabled={props.counter === 0}>
        {props.buttonName}
      </button>
    </div>
  );
};
