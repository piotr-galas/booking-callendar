import React from 'react'
import SelectedDatesComponent from '../../components/summary/selectedDates'
import { connect } from 'react-redux'

class Summary extends React.Component{

  render(){
    return <SelectedDatesComponent />
  }
}
const mapStateToProps = function(state){
  return {
    summary: state.summary
  }
}

export default connect(mapStateToProps)(Summary)
