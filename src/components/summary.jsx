import React from 'react'
import 'date-fns';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import Collapse from '@material-ui/core/Collapse';
import Switch from '@material-ui/core/Switch';

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

    state = {
    selectedDate: new Date('2014-08-18T21:11:54'),
    checked: false,
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };


  render(){
    const { classes } = this.props;
    const { selectedDate } = this.state;
    const { open } = this.props;

    return (
      <div>
       <Collapse in={open}>
        <Paper className={classes.root} elevation={1}>
          <Grid container className={classes.gridContainer} spacing={32} justify="space-around" direction="row">
            <Grid item xs={4}>
              <Paper className={classes.root} elevation={1}>
                Deuter Kid Comfoort III
              </Paper>
            </Grid>
            <Grid item xs={4}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container className={classes.gridContainer} spacing={16} justify="center" direction="row">
                    <Grid item xs={6}>
                      <DatePicker
                        margin="normal"
                        label="Data początkowa"
                        value={selectedDate}
                        onChange={this.handleDateChange}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <DatePicker
                        margin="normal"
                        label="Data końcowa"
                        value={selectedDate}
                        onChange={this.handleDateChange}
                        variant="outlined"
                      />
                    </Grid>
                  </Grid>
                </MuiPickersUtilsProvider>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.root} elevation={1}>
                <ul>
                  <li>Nazwisko: </li>
                  <li>Email: </li>
                  <li>Uwagi: </li>
                </ul>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
    </Collapse>
  </div>
    )
  }
}

export default withStyles(styles)(Summary)
