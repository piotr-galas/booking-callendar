import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Content from '../containers/content'
import NavigationButtons from '../containers/navigationButtons'
import Summary from '../containers/summary'
import Steps from '../containers/steps'
import ThankYou from '../containers/thankYou';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  overrides:{
    MuiFormControl:{
        marginNormal: {
          marginTop: 0
        }
    },
  },
  typography: {
    useNextVariants: true,
  },
})


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    minHeight: 450,
  },
});

class StepperComponent extends Component {
  renderForm(){
    return (
      <div>
        <Steps />
        <Summary />
        <Content />
        <NavigationButtons />
      </div>
    )
  }

  renderThankYou(){
    return (
      <ThankYou />
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider  theme={theme} >
        <Paper className={classes.root} elevation={1}>
          {this.props.thankYou ? this.renderThankYou() : this.renderForm() }
        </Paper>
      </ MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(StepperComponent);
