import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import classes from './Input.module.css'

type InputPropsType = {
  className: string
  value: number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: InputPropsType) => {

  const [changingMode, setChangingMode] = useState(true)

  const editModeHandler = () => {
    setChangingMode(false)
  };
  const viewModeHandler = () => {
    setChangingMode(true)
  };
  const presEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      viewModeHandler()
    }
  };

  return (
    <div>
      {
        changingMode

          ? <span className={classes.span} onDoubleClick={editModeHandler}>{props.value}</span>

          : <input
            className={props.className}
            value={props.value}
            onChange={props.onChange}
            autoFocus
            onKeyPress={presEnterHandler}
            type='number'
            onBlur={viewModeHandler}
          />
      }
    </div>
  );
};

export default Input;