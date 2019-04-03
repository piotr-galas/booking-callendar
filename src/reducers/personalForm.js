const emptyData = { data: {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  description: ""
}}


export default function dispatch(state=emptyData, action){
  switch (action.type) {
    case 'CHANGE_PERSONAL_DATA':
      return Object.assign({}, state, action.payload)
    default:
      return state;
  }
}
