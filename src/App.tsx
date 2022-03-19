import React, {useEffect, useState} from 'react';
import classes from './App.module.css';
import {Counter} from "./Components/Counter/Counter";
import {SetPanel} from "./Components/SetPanel/SetPanel";

function App() {

  const [counter, setCounter] = useState(0)
  const [isError, setError] = useState(false)
  const [inputValue1, setInputValue1] = useState(0)
  const [inputValue2, setInputValue2] = useState(0)

  useEffect(() => {
    let valueAsString = localStorage.getItem('counterValue1')
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString)
      setInputValue1(newValue)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('counterValue1', JSON.stringify(inputValue1))
  }, [inputValue1])

  useEffect(() => {
    let valueAsString = localStorage.getItem('counterValue2')
    if (valueAsString) {
      let newValue2 = JSON.parse(valueAsString)
      setInputValue2(newValue2)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('counterValue2', JSON.stringify(inputValue2))
  }, [inputValue2])

  useEffect(() => {
    let valueAsString = localStorage.getItem('counterValue')
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString)
      setCounter(newValue)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('counterValue', JSON.stringify(counter))
  }, [counter])

  let maxValue = inputValue1
  let minValue = inputValue2

  return (
    <div className={classes.App}>
      <div className={classes.components}>
        <Counter counter={counter}
                 setCounter={setCounter}
                 maxValue={maxValue}
                 minValue={minValue}
                 isError={isError}
                 setError={setError}
        />
        <SetPanel minValue={minValue}
                  maxValue={maxValue}
                  counter={counter}
                  setCounter={setCounter}
                  inputValue1={inputValue1}
                  setInputValue1={setInputValue1}
                  inputValue2={inputValue2}
                  setInputValue2={setInputValue2}
                  setError={setError}
                  isError={isError}
        />
      </div>
    </div>
  );
}

export default App;
