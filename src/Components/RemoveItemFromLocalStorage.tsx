import React from 'react';

export const RemoveItemFromLocalStorage = () => {

  const RemoveItemFromLocalStorageHandler = () => {
    localStorage.removeItem('counterKey + 1')
  }

  return (
    <div>
      <button onClick={RemoveItemFromLocalStorageHandler}>RemoveItem</button>
    </div>
  );

};