import React from 'react';
import { connect } from 'react-redux';
import { fetchSteps } from '../actions/stepper'
import BookingTool from '../components/bookingTool'

class HorizontalLinearStepper extends React.Component {
  componentDidMount(){
    this.props.fetchSteps();
  }

  render() {
    return (
        <BookingTool
          steps={this.props.steps}
          activeStep={this.props.activeStep}
        />
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalLinearStepper);
