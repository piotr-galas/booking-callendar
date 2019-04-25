import { displayThankYou } from './stepper'

export function changePersonalData(data){
  return { type: "CHANGE_PERSONAL_DATA", payload: { data }}
}

export function processPersonalDataResponse(data){
  return (dispatch) => {
    dispatch({ type: "PROCESS_PERSONAL_DATA_RESPONSE", payload: {data}})
    dispatch(displayThankYou(data))
  }
}
