import React, {useState} from 'react';
import classes from './App.module.css';
import {Button} from "./Components/Button/Button";
import {Interface} from "./Components/Interface/Interface";
// import {SetLocalStorage} from "./Components/SetLocalStorage";
// import {GetLocalStorage} from "./Components/GetLocalStorage";
// import {ClearLocalStorage} from "./Components/ClearLocalStorage";
// import {RemoveItemFromLocalStorage} from "./Components/RemoveItemFromLocalStorage";

function App() {

  const [counter, setCounter] = useState(0)

  const onClickAddHandler = () => {
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
          <div className={classes.buttons}>
            <Button callBack={onClickAddHandler} buttonName='Add' counter={counter === 5}/>
            <Button callBack={onClickResetButtonHandler} buttonName='Reset' counter={counter === 0}/>
          </div>
          {/*<SetLocalStorage counter={counter}/>*/}
          {/*<GetLocalStorage setCounter={setCounter}/>*/}
          {/*<ClearLocalStorage setCounter={setCounter}/>*/}
          {/*<RemoveItemFromLocalStorage/>*/}
        </div>
      </div>
    </div>
  );
}

export default App;
