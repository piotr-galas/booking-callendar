const defaultRange = {
  selection: {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }
}

function getEndDate(startDate, state){
  return startDate > state.selection.endDate ? startDate : state.selection.endDate
}

function getStartDate(endDate, state){
  return endDate < state.selection.startDate ? endDate : state.selection.startDate
}

export default function dispatch(state = defaultRange, action){
  let endDate
  let startDate
  switch (action.type) {
    case 'SELECT_RANGE':
      const range = action.payload.selection
      return Object.assign({}, state, action.payload.selection)
    case 'SELECT_START_DATE':
      startDate = action.payload.selection
      endDate = getEndDate(startDate, state)
      return Object.assign({}, state, {selection: {startDate, endDate}})
    case 'SELECT_END_DATE':
      endDate = action.payload.selection
      startDate = getStartDate(endDate, state)
      return Object.assign({}, state, {selection: {startDate, endDate}})
    default:
      return state;
  }
}
