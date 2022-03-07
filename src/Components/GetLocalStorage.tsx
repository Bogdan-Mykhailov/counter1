import React from 'react';

type GetLocalStorageHandlerPropsType = {
  setCounter: (newValue: number)=>void
}

export const GetLocalStorage = (props: GetLocalStorageHandlerPropsType) => {

  const GetLocalStorageHandler = () => {
    let valueAssString = localStorage.getItem('counterKey')
    if (valueAssString) {
      let newValue =  JSON.parse(valueAssString)
      props.setCounter(newValue)
    }
  }

  return (
    <div>
      <button onClick={GetLocalStorageHandler}>GetLocalStorage</button>
    </div>
  );
};