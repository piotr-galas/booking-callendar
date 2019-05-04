import React from 'react';
import SummaryComponent from '../components/summary';
import { connect } from 'react-redux';
import { setStep } from '../actions/stepper'


class Summary extends React.Component{
  handleSetStep(step){
    this.props.setStep(step)
  }
  
  render(){
    return <SummaryComponent
      open={this.props.summary.open}
      handleSetStep={this.handleSetStep.bind(this)}
       />
  }
}
const mapStateToProps = function(state){
  return {
    summary: state.summary,
  }
}

const mapDispatchToProps = {
  setStep
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary)
