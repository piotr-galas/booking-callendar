import React from 'react';
import DatePickerComponent from '../../components/content/datePicker'
import { connect } from 'react-redux'
import { selectRange } from '../../actions/dateRange'

class DatePickerContainer extends React.Component {
  handleSelect(range){
    this.props.selectRange(range)
  }

  render(){
		return (
      <DatePickerComponent
        handleSelect={this.handleSelect.bind(this)}
        ranges={[this.props.range]}
        disabledDates={[]}
      />
		)
	}

}
const mapDispatchToProps = {
  selectRange
}
const mapStateToProps = function(state){
  return {
    range: state.rangePicker.selection
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerContainer);
