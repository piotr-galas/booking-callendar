import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Content from '../containers/content'
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  buttonsContainer: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },

});


class StepperComponent extends Component {
  render() {
    const { classes } = this.props;
    const { activeStep } = this.props;
    const { steps } = this.props;

    return (
      <Paper className={classes.root} elevation={1}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Paper className={classes.root} elevation={1}>
          siemanko
        </Paper>
        <Content />

        <div className={classes.buttonsContainer}>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={this.props.handlePrevious}
              className={classes.button}
            >
              Back
            </Button>

            <Button
              disabled={activeStep === 0}
              variant="contained"
              color="primary"
              onClick={this.props.handleNext}
              className={classes.button}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(StepperComponent);
