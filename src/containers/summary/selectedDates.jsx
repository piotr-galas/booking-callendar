import React from 'react'
import SelectedDatesComponent from '../../components/summary/selectedDates'
import { connect } from 'react-redux'
import { selectStartDate, selectEndDate } from '../../actions/dateRange'

class SelectedDates extends React.Component{
  startDateChange(date){
    this.props.selectStartDate(date)
  }

  endDateChange(date){
    this.props.selectEndDate(date)
  }

  render(){
    return <SelectedDatesComponent
      startDate={this.props.startDate}
      endDate={this.props.endDate}
      handleStartDateChange={this.startDateChange.bind(this)}
      handleEndDateChange={this.endDateChange.bind(this)}
    />
  }
}
const mapStateToProps = function(state){
  return {
    startDate: state.rangePicker.selection.startDate,
    endDate: state.rangePicker.selection.endDate
  }
}

const mapDispatchToProps = {
  selectStartDate,
  selectEndDate,
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectedDates)
