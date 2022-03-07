import React from 'react';

type ClearLocalStorageHandlerPropsType = {
  setCounter: (newValue: number)=>void
}

export const ClearLocalStorage = (props: ClearLocalStorageHandlerPropsType) => {

  const ClearLocalStorageHandler = () => {
    localStorage.clear()
    props.setCounter(0)
  }




  return (
    <div>
      <button onClick={ClearLocalStorageHandler}>ClearLocalStorage</button>
    </div>
  );
};

