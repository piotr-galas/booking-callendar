import React from 'react';
import NavigationButtonsComponent from '../components/navigationButtons';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme =>({
  buttonsContainer: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
})

class NavigationButtons extends React.Component{
  render(){
    const { classes } = this.props;
    const { activeStep } = this.props;
    const { steps } = this.props;

    return(
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
    )
  }
}


export default withStyles(styles)(NavigationButtons)
