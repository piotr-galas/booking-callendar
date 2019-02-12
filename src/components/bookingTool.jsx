import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Typography from '@material-ui/core/Typography';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import PersonalForm from '../containers/personalForm'
import Content from '../containers/content'


const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },

});

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

class StepperComponent extends Component {
  render() {
    const { classes } = this.props;
    const { activeStep } = this.props;
    const { steps } = this.props;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Content />

        <div>
          <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={this.props.handlePrevious}
              className={classes.button}
            >
              Back
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={this.props.handleNext}
              className={classes.button}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(StepperComponent);
