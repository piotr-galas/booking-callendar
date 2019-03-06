export function selectRange(range){
  return {type: "SELECT_RANGE", payload: { selection: range}}
}

export function selectStartDate(date){
  return {type: "SELECT_START_DATE", payload: { selection: date}}
}

export function selectEndDate(date){
  return {type: "SELECT_END_DATE", payload: { selection: date}}
}
