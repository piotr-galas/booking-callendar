const defaultState = { activeStep: 0, steps: [], displayThankYou: false}

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
    case 'DISPLAY_THANK_YOU':
    const borrower = action.payload.data.reservationForItem.borrower
    const order = action.payload.data.reservationForItem.order
    if (borrower.errors.length === 0 && order.errors.length === 0){
      return Object.assign({}, state, {displayThankYou: true})
    }else{
      return state
    }

    default:
      return state;
  }
}
