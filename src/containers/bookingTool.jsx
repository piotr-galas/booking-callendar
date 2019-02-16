import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { nextStep, previousStep, fetchSteps} from '../actions/stepper'
import BookingTool from '../components/bookingTool'

class HorizontalLinearStepper extends React.Component {
  componentDidMount(){
    this.props.fetchSteps();
  }
  handleNext() {
    this.props.nextStep(this.props.activeStep)
  };

  handlePrevious() {
    this.props.previousStep(this.props.activeStep)
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    return (
        <BookingTool
          steps={this.props.steps}
          activeStep={this.props.activeStep}
          handleNext={this.handleNext.bind(this)}
          handlePrevious={this.handlePrevious.bind(this)}
        />
    );
  }
}

HorizontalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = function(state) {
  return {
    activeStep: state.step.activeStep,
    steps: state.step.steps
  }
}
const mapDispatchToProps = {
  nextStep,
  previousStep,
  fetchSteps
}

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalLinearStepper);
