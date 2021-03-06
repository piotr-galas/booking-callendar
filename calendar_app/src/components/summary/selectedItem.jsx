import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';


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

class SelectedItem extends React.Component{
  selectedItem(){
    if(this.props.selectedItem){
      return this.props.selectedItem.fullName
    }
  }

  render(){
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={1}>
        {this.selectedItem()}
      </Paper>
    )
  }
}

export default withStyles(styles)(SelectedItem)
