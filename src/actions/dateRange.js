export function selectRange(range){
  return {type: "SELECT_RANGE", payload: { selection: range}}
}
