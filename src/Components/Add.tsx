import React from 'react';
import classes from "../App.module.css";

type AddPropsType = {
  callBack: () => void
  counter: number
  buttonName: string
}

export const Add = (props: AddPropsType) => {
  return (
    <div>
      <button className={classes.btn}
              onClick={props.callBack}
              disabled={props.counter === 5}>
        {props.buttonName}
      </button>
    </div>
  );
};
