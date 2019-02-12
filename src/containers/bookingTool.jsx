import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { nextStep, previousStep} from '../actions/stepper'
import BookingTool from '../components/bookingTool'


function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

class HorizontalLinearStepper extends React.Component {
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
          steps={getSteps()}
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
  }
}
const mapDispatchToProps = {
  nextStep,
  previousStep
}

export default connect(mapStateToProps, mapDispatchToProps)(HorizontalLinearStepper);
