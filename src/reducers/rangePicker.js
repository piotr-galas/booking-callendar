const defaultRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
}


export default function dispatch(state = defaultRange, action){
  switch (action.type) {
    case 'SELECT_RANGE':
      return Object.assign({}, state, action.payload.selection)
    default:
      return state;
  }
}
