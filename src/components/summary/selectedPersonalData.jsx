import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2.4,
    paddingBottom: theme.spacing.unit * 2.4,
    cursor: 'pointer',
    '&:hover': {
     background: theme.palette.grey[50]
    }
  },
})

class SelectedPersonalData extends React.Component{
  render(){
    const {classes} = this.props

    return (
      <Paper className={classes.root} elevation={1}>
          Imie i nazwisko

      </Paper>)
  }
}

export default withStyles(styles)(SelectedPersonalData)
