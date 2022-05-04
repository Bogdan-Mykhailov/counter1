const initialState = {
  value: 0,
  isError: false,
  collapsed: false,
  switcher: false,
  maxValue: 0,
  minValue: 0,
}

type InitialStateType = typeof initialState;

export enum ACTIONS {
  ADD_VALUE = 'ADD-VALUE',
  RESET_VALUE = 'RESET-VALUE',
  SET_VALUE = 'SET-VALUE',
  ERROR = 'ERROR',
  COLLAPSED = 'COLLAPSED',
  SWITCHER = 'SWITCHER',
  MAX_VALUE = 'MAX_VALUE',
  MIN_VALUE = 'MIN_VALUE',
}

export type ActionTypes =
  incrementValueACType
  | resetValueACType
  | setValueACType
  | errorACType
  | collapsedACType
  | switcherACType
  | maxValueACType
  | minValueACType

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case ACTIONS.ADD_VALUE: {
      return {...state, value: state.value + 1}
    }
    case ACTIONS.RESET_VALUE: {
      return {...state, value: action.payload.minValue}
    }
    case ACTIONS.SET_VALUE: {
      return {...state, value: action.payload.minValue}
    }
    case ACTIONS.ERROR: {
      return {...state, isError: action.payload.isError}
    }
    case ACTIONS.COLLAPSED: {
      return {...state, collapsed: action.payload.collapsed}
    }
    case ACTIONS.SWITCHER: {
      return {...state, switcher: action.payload.switcher}
    }
    case ACTIONS.MAX_VALUE: {
      return {...state, maxValue: action.payload.maxValue}
    }
    case ACTIONS.MIN_VALUE: {
      return {...state, minValue: action.payload.minValue}
    }

    default:
      return state;
  }
};

export type incrementValueACType = ReturnType<typeof incrementValueAC>;
export const incrementValueAC = () => ({type: ACTIONS.ADD_VALUE} as const);

export type resetValueACType = ReturnType<typeof resetValueAC>;
export const resetValueAC = (minValue: number) => ({
  type: ACTIONS.RESET_VALUE,
  payload: {
    minValue
  }
} as const);

export type setValueACType = ReturnType<typeof setValueAC>;
export const setValueAC = (minValue: number) => ({
  type: ACTIONS.SET_VALUE,
  payload: {
    minValue
  }
} as const);

export type errorACType = ReturnType<typeof errorAC>;
export const errorAC = (isError: boolean) => ({
  type: ACTIONS.ERROR,
  payload: {
    isError
  }
} as const);

export type collapsedACType = ReturnType<typeof collapsedAC>;
export const collapsedAC = (collapsed: boolean) => ({
  type: ACTIONS.COLLAPSED,
  payload: {
    collapsed
  }
} as const);

export type switcherACType = ReturnType<typeof switcherAC>;
export const switcherAC = (switcher: boolean) => ({
  type: ACTIONS.SWITCHER,
  payload: {
    switcher
  }
} as const);

export type maxValueACType = ReturnType<typeof maxValueAC>;
export const maxValueAC = (maxValue: number) => ({
  type: ACTIONS.MAX_VALUE,
  payload: {
    maxValue

  }
} as const);

export type minValueACType = ReturnType<typeof minValueAC>;
export const minValueAC = (minValue: number) => ({
  type: ACTIONS.MIN_VALUE,
  payload: {
    minValue
  }
} as const);