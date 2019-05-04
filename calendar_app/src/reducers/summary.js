export default function dispatch(state = { open: false}, action){
  switch (action.type) {
    case 'OPEN_SUMMARY':
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}
