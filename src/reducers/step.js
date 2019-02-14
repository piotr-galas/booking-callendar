const defaultNextStepState = { activeStep: 0 }
export default function nextStep(state=defaultNextStepState, action){
  switch (action.type) {
    case 'NEXT_STEP':
      return Object.assign({}, state, action.payload)
    case 'PREVIOUS_STEP':
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}
