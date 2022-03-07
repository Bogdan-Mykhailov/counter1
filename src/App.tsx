import React, {useState} from 'react';
import classes from './App.module.css';
import {Add} from "./Components/Add";
import {Reset} from "./Components/Reset";
import {Interface} from "./Components/Interface";
import {SetLocalStorage} from "./Components/SetLocalStorage";
import {GetLocalStorage} from "./Components/GetLocalStorage";
import {ClearLocalStorage} from "./Components/ClearLocalStorage";
import {RemoveItemFromLocalStorage} from "./Components/RemoveItemFromLocalStorage";

function App() {

  const [counter, setCounter] = useState(0)

  const onClickAddButtonHandler = () => {
    setCounter(counter + 1)
  }
  const onClickResetButtonHandler = () => {
    setCounter(0)
  }

  return (
    <div className={classes.App}>

      <Interface counter={counter}/>

        <div className={classes.btnWindow}>
          <div className={classes.wrapper}>

            <Add counter={counter} callBack={() => onClickAddButtonHandler()} buttonName='Add'/>
            <Reset counter={counter} callBack={() => onClickResetButtonHandler()} buttonName='Reset'/>
            <SetLocalStorage counter={counter}/>
            <GetLocalStorage setCounter={setCounter}/>
            <ClearLocalStorage setCounter={setCounter}/>
            <RemoveItemFromLocalStorage/>
          </div>
        </div>
    </div>
  );
}

export default App;
