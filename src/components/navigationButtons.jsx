import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


const styles = theme =>({
  buttonsContainer: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
})


class NavigationButtons extends React.Component{
  render(){
    const { classes } = this.props;
    const { activeStep } = this.props;
    let button;
    if(activeStep === 1){
      button = (
        <Button
          variant="contained"
          onClick={this.props.handleNext}
          className={classes.button}
          size="large"
          color="primary"
        >
          Dalej
          <Icon className={classes.rightIcon}>navigate_next</Icon>
        </Button>
      )
    }

    if(activeStep === 2){
      button = (

            <Button
              variant="contained"
              color="primary"
              onClick={this.props.handleItemReservation}
              className={classes.button}
              size="large"
            >
              Zarezrwuj
              <Icon className={classes.rightIcon}>navigate_next</Icon>
            </Button>
      )
    }

    return(
      <div className={classes.buttonsContainer}>
        <div>{button}</div>
      </div>
    )
  }
}


export default withStyles(styles)(NavigationButtons)
