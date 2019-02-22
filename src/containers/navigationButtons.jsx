import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { nextStep, previousStep} from '../actions/stepper'
import NavigationButtonsComponent from '../components/navigationButtons'

class NavigationButtons extends React.Component{
  handleNext() {
    this.props.nextStep(this.props.activeStep)
  };

  handlePrevious() {
    this.props.previousStep(this.props.activeStep)
  };

  render(){
    return(
      <NavigationButtonsComponent
        steps={this.props.steps}
        activeStep={this.props.activeStep}
        handleNext={this.handleNext.bind(this)}
        handlePrevious={this.handlePrevious.bind(this)}
      />
    )
  }
}

const mapStateToProps = function(state) {
  return {
    activeStep: state.step.activeStep,
    steps: state.step.steps
  }
}
const mapDispatchToProps = {
  nextStep,
  previousStep,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationButtons)
