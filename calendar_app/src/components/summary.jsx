import React from 'react'
import 'date-fns';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Collapse from '@material-ui/core/Collapse';
import SelectedDates from '../containers/summary/selectedDates';
import SelectedItem from '../containers/summary/selectedItem';
import SelectedPersonalData from '../containers/summary/selectedPersonalData';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  gridContainer: {
    flexGrow: 1,
  }
})

class Summary extends React.Component{
  render(){
    const { classes } = this.props;
    const { open } = this.props;

    return (
      <div>
       <Collapse in={open}>
        <Paper className={classes.root} elevation={1}>
          <Grid container className={classes.gridContainer} spacing={32} justify="space-around" direction="row">
            <Grid item xs={4} onClick={() => this.props.handleSetStep(0)}>
              <SelectedItem  />
            </Grid>
            <Grid item xs={4}>
              <SelectedDates />
            </Grid>
            <Grid item xs={4} onClick={() => this.props.handleSetStep(2)}>
              <SelectedPersonalData />
            </Grid>
          </Grid>
        </Paper>
    </Collapse>
  </div>
    )
  }
}

export default withStyles(styles)(Summary)
