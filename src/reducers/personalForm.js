const emptyData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  description: "",
  errors:{}
}


export default function dispatch(state=emptyData, action){
  switch (action.type) {
    case 'CHANGE_PERSONAL_DATA':
    console.log(action.payload)
      return Object.assign({}, state, action.payload.data)
    case "PROCESS_PERSONAL_DATA_RESPONSE":
      const borrower = action.payload.data.reservationForItem.borrower
      const order = action.payload.data.reservationForItem.order
      let errors = {}
      borrower.errors.map((error) => {
        Object.assign(errors, error)
      } )
      order.errors.map((error) => {
        Object.assign(errors, error)
      } )
      return Object.assign({}, state, action.payload.data.reservationForItem.borrower, action.payload.data.reservationForItem.order, { errors: errors } )

    default:
      return state;
  }
}
