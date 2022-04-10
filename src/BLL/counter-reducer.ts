

const initialState = {
  value: 0
}

type InitialStateType = typeof initialState

export enum Actions {
  ADD_VALUE = 'ADD-VALUE',
  RESET_VALUE = 'RESET-VALUE',
  SET_VALUE = 'SET-VALUE',
}

export type ActionTypes = incrementValueACType | resetValueACType | setValueACType

export const counterReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {

  switch (action.type) {
    case Actions.ADD_VALUE: {
      return {...state, value: state.value + 1}
    }
    case Actions.RESET_VALUE: {
      return {...state, value: action.payload.minValue}
    }
    case Actions.SET_VALUE: {
      return {...state, value: action.payload.inputValue2}
    }

    default:
      return state;
  }
}

export type incrementValueACType = ReturnType<typeof incrementValueAC>
export const incrementValueAC = () => ({type: Actions.ADD_VALUE} as const)

export type resetValueACType = ReturnType<typeof resetValueAC>
export const resetValueAC = (minValue: number) => ({
  type: Actions.RESET_VALUE,
  payload: {
    minValue
  }
} as const)

export type setValueACType = ReturnType<typeof setValueAC>
export const setValueAC = (inputValue2: number) => ({
  type: Actions.SET_VALUE,
  payload: {
    inputValue2
  }
} as const)