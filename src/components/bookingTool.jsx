import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Content from '../containers/content'
import NavigationButtons from '../containers/navigationButtons'
import Summary from '../containers/summary'
import Steps from '../containers/steps'
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class StepperComponent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        <Steps />
        <Summary />
        <Content />
        <NavigationButtons />
      </Paper>
    );
  }
}

export default withStyles(styles)(StepperComponent);
