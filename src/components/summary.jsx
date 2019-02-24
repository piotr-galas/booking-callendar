import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

class Summary extends React.Component{
  render(){
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={1}>
        siemanko
      </Paper>
    )
  }
}

export default withStyles(styles)(Summary)
