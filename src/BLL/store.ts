import {combineReducers, createStore } from "redux";
import { counterReducer } from "./counter-reducer";

const rootReducer = combineReducers({
  counter: counterReducer
});

let preloadedState;
const persistedStateString = localStorage.getItem('state');
if (persistedStateString) {
  preloadedState = JSON.parse(persistedStateString)
}

export const store = createStore(rootReducer, preloadedState);

store.subscribe( ()=> {
  localStorage.setItem('state', JSON.stringify(store.getState()))
});

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store;