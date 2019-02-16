import { combineReducers } from 'redux'
import step from './step';
import item from './item'

export default combineReducers({
  item,
  step
});
