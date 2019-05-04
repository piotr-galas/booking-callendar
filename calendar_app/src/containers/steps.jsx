import React from 'react'
import StepsComponent from '../components/steps'
import { fetchSteps } from '../actions/stepper'
import { connect } from 'react-redux';

class Steps extends React.Component {
  componentDidMount(){
    this.props.fetchSteps();
  }

  render(){
    return <StepsComponent
      steps={this.props.steps}
      activeStep={this.props.activeStep}
    />
  }
}

const mapStateToProps = function(state) {
  return {
    activeStep: state.step.activeStep,
    steps: state.step.steps
  }
}
const mapDispatchToProps = {
  fetchSteps
}

export default connect(mapStateToProps, mapDispatchToProps)(Steps);
