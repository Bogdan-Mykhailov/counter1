import React from 'react';
import classes from './App.module.css';
import {SetPanel} from "./Components/SetPanel/SetPanel";
import {FullCounter} from "./Components/FullCounter/FullCounter";
import {Switch} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./BLL/store";
import {switcherAC} from "./BLL/counter-reducer";

function App() {

  const collapsed = useSelector<AppStateType, boolean>(state => state.counter.collapsed);
  const switcher = useSelector<AppStateType, boolean>(state => state.counter.switcher);

  const dispatch = useDispatch();

  const label = {inputProps: {'aria-label': 'Switch demo'}};

  const theme = switcher
    ? classes.themeDark
    : classes.themeWhite;

  const switcherHandler = () => {
    dispatch(switcherAC(!switcher))
  };

  return (
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
            ? <FullCounter/>
            : <SetPanel/>
          }
        </div>

        : <div className={classes.components}>
          <FullCounter/>
          <SetPanel/>
        </div>
      }
    </div>
  );
}

export default App;
