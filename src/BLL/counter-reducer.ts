

const initialState = {
  counter: 0
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {

  switch (action.type) {
    case '':
  }

  return state;
}