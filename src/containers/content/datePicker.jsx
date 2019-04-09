import React from 'react';
import DatePickerComponent from '../../components/content/datePicker'
import { connect } from 'react-redux'
import { selectRange } from '../../actions/dateRange'
import moment from 'moment'


class DatePickerContainer extends React.Component {
  // formattedRange fixes timezone problem
  handleSelect(range){
    const startDate = moment(range.selection.startDate).add(4, "h").toDate()
    const endDate = moment(range.selection.endDate).add(4, "h").toDate()
    const formattedRange = { selection: {startDate, endDate, key: "selection"}}
    this.props.selectRange(formattedRange)
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
