const defaultState = { activeStep: 0, steps: []}

export default function step(state=defaultState, action){
  switch (action.type) {
    case 'NEXT_STEP':
      return Object.assign({}, state, action.payload)
    case 'PREVIOUS_STEP':
      return Object.assign({}, state, action.payload)
    case 'FETCH_STEPS':
      return Object.assign({}, state, action.payload)
    case 'SET_STEP':
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}
