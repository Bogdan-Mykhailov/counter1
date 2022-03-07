import React from 'react';

type SetLocalStorageHandlerPropsType = {
  counter: number
}

export const SetLocalStorage = (props: SetLocalStorageHandlerPropsType) => {



  const SetLocalStorageHandler = () => {
    localStorage.setItem('counterKey', JSON.stringify(props.counter))
    localStorage.setItem('counterKey + 1', JSON.stringify(props.counter + 1))
  }

  return (
    <div>
      <button onClick={SetLocalStorageHandler}>SetLocalStorage</button>
    </div>
  );
};