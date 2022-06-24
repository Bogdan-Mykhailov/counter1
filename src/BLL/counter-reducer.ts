const initialState = {
  value: 0,
  isError: false,
  collapsed: false,
  switcher: false,
  maxValue: 0,
  minValue: 0,
}

type InitialStateType = typeof initialState;

const ADD_VALUE = 'ADD-VALUE'
const RESET_VALUE = 'RESET-VALUE'
const SET_VALUE = 'SET-VALUE'
const ERROR = 'ERROR'
const COLLAPSED = 'COLLAPSED'
const SWITCHER = 'SWITCHER'
const MAX_VALUE = 'MAX_VALUE'
const MIN_VALUE = 'MIN_VALUE'

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case ADD_VALUE: {
      return {...state, value: state.value + 1}
    }
    case RESET_VALUE: {
      return {...state, value: action.payload.minValue}
    }
    case SET_VALUE: {
      return {...state, value: action.payload.minValue}
    }
    case ERROR: {
      return {...state, isError: action.payload.isError}
    }
    case COLLAPSED: {
      return {...state, collapsed: action.payload.collapsed}
    }
    case SWITCHER: {
      return {...state, switcher: action.payload.switcher}
    }
    case MAX_VALUE: {
      return {...state, maxValue: action.payload.maxValue}
    }
    case MIN_VALUE: {
      return {...state, minValue: action.payload.minValue}
    }

    default:
      return state;
  }
};

//actions
export const incrementValueAC = () => ({type: ADD_VALUE} as const);
export const resetValueAC = (minValue: number) => ({
  type: RESET_VALUE,
  payload: {
    minValue
  }
} as const);
export const setValueAC = (minValue: number) => ({
  type: SET_VALUE,
  payload: {
    minValue
  }
} as const);
export const errorAC = (isError: boolean) => ({
  type: ERROR,
  payload: {
    isError
  }
} as const);
export const collapsedAC = (collapsed: boolean) => ({
  type: COLLAPSED,
  payload: {
    collapsed
  }
} as const);
export const switcherAC = (switcher: boolean) => ({
  type: SWITCHER,
  payload: {
    switcher
  }
} as const);
export const maxValueAC = (maxValue: number) => ({
  type: MAX_VALUE,
  payload: {
    maxValue

  }
} as const);
export const minValueAC = (minValue: number) => ({
  type: MIN_VALUE,
  payload: {
    minValue
  }
} as const);

//types

export type ActionTypes =
  | ReturnType<typeof incrementValueAC>
  | ReturnType<typeof resetValueAC>
  | ReturnType<typeof setValueAC>
  | ReturnType<typeof errorAC>
  | ReturnType<typeof collapsedAC>
  | ReturnType<typeof switcherAC>
  | ReturnType<typeof maxValueAC>
  | ReturnType<typeof minValueAC>