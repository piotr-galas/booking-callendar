import { combineReducers } from 'redux'
import step from './step';
import item from './item'
import rangePicker from './rangePicker'
import summary  from './summary'
import personalForm from './personalForm'

export default combineReducers({
  item,
  step,
  rangePicker,
  summary,
  personalForm
});
