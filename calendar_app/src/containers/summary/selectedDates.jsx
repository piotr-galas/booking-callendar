import React from 'react'
import SelectedDatesComponent from '../../components/summary/selectedDates'
import { connect } from 'react-redux'
import { selectStartDate, selectEndDate } from '../../actions/dateRange'
import { setStep } from '../../actions/stepper'


class SelectedDates extends React.Component{
  startDateChange(date){
    this.props.selectStartDate(date)
  }

  endDateChange(date){
    this.props.selectEndDate(date)
  }

  setStep(step){
    this.props.setStep(step)
  }

  render(){
    return <SelectedDatesComponent
      errors={this.props.orderErrors}
      startDate={this.props.startDate}
      endDate={this.props.endDate}
      handleStartDateChange={this.startDateChange.bind(this)}
      handleEndDateChange={this.endDateChange.bind(this)}
      handleSetStep={this.props.setStep.bind(this)}
    />
  }
}
const mapStateToProps = function(state){
  return {
    startDate: state.rangePicker.selection.startDate,
    endDate: state.rangePicker.selection.endDate,
    orderErrors: state.personalForm.errors
  }
}

const mapDispatchToProps = {
  selectStartDate,
  selectEndDate,
  setStep
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectedDates)
