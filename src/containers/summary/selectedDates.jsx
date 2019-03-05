import React from 'react'
import SelectedDatesComponent from '../../components/summary/selectedDates'
import { connect } from 'react-redux'

class Summary extends React.Component{
  render(){
    return <SelectedDatesComponent startDate={this.props.startDate} endDate={this.props.endDate}/>
  }
}
const mapStateToProps = function(state){
  return {
    startDate: state.rangePicker.selection.startDate,
    endDate: state.rangePicker.selection.endDate
  }
}

export default connect(mapStateToProps)(Summary)
