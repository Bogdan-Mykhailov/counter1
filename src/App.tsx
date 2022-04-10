import React, {useEffect, useState} from 'react';
import classes from './App.module.css';
import {SetPanel} from "./Components/SetPanel/SetPanel";
import {FullCounter} from "./Components/FullCounter/FullCounter";
import {Switch} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./BLL/store";

function App() {

  const value = useSelector<AppStateType, number>(state => state.counter.value)
  const dispatch = useDispatch()

  const [isError, setError] = useState(false)
  const [inputValue1, setInputValue1] = useState(0)
  const [inputValue2, setInputValue2] = useState(0)
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [switcher, setSwitcher] = useState<boolean>(false)

  useEffect(() => {
    let valueAsString = localStorage.getItem('counterValue1')
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString)
      setInputValue1(newValue)
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('counterValue1', JSON.stringify(inputValue1))
  }, [inputValue1]);

  useEffect(() => {
    let valueAsString = localStorage.getItem('counterValue2')
    if (valueAsString) {
      let newValue2 = JSON.parse(valueAsString)
      setInputValue2(newValue2)
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('counterValue2', JSON.stringify(inputValue2))
  }, [inputValue2]);

  useEffect(() => {
    let switcher = localStorage.getItem('switcher')
    if (switcher) {
      let switcherFromLS = JSON.parse(switcher)
      setSwitcher(switcherFromLS)
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('switcher', JSON.stringify(switcher))
  }, [switcher]);

  let maxValue = inputValue1;
  let minValue = inputValue2;

  const label = {inputProps: {'aria-label': 'Switch demo'}};

  const theme = switcher ? classes.themeDark : classes.themeWhite;

  const switcherHandler = () => {
    setSwitcher(!switcher)

  };

  return (
    //
    <div className={`${classes.App} ${theme}`}>

      <Switch {...label}
              value={switcher}
              checked={switcher}
              color="default"
              onClick={switcherHandler}
      />
      {switcher
        ? <div className={classes.components}>
          {collapsed
            ? <FullCounter maxValue={maxValue}
                           minValue={minValue}
                           isError={isError}
                           setError={setError}
                           setCollapsed={setCollapsed}
                           switcher={switcher}
            />
            : <SetPanel minValue={minValue}
                        maxValue={maxValue}
                        inputValue1={inputValue1}
                        setInputValue1={setInputValue1}
                        inputValue2={inputValue2}
                        setInputValue2={setInputValue2}
                        setError={setError}
                        isError={isError}
                        collapsed={collapsed}
                        setCollapsed={setCollapsed}
            />
          }
        </div>
        : <div className={classes.components}>
          <FullCounter maxValue={maxValue}
                       minValue={minValue}
                       isError={isError}
                       setError={setError}
                       setCollapsed={setCollapsed}
                       switcher={switcher}
          />
          <SetPanel minValue={minValue}
                    maxValue={maxValue}
                    inputValue1={inputValue1}
                    setInputValue1={setInputValue1}
                    inputValue2={inputValue2}
                    setInputValue2={setInputValue2}
                    setError={setError}
                    isError={isError}
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
          />
        </div>
      }
    </div>
  );
}

export default App;
