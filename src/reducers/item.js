export default function dispatch(state={items: []}, action){
  switch (action.type) {
    case 'FETCH_ITEMS':
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}
