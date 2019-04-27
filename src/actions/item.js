import {nextStep} from './stepper'
import { openSummary } from './summary'

export function fetchItems(items){
  return {type: 'FETCH_ITEMS', payload: {items}}
}

export function selectItem(item){
  return (dispatch) => {
    dispatch({type: 'SELECT_ITEM', payload: {item_id: item.id}})
    dispatch(openSummary())
    setTimeout(() => {
      dispatch(nextStep(0))
    }, 400)

  }
}
