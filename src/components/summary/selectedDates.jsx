import React from 'react'
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";



const styles = theme => ({
  gridContainer: {
    flexGrow: 1,
  }
})

const theme = createMuiTheme({
  overrides:{
    MuiFormControl:{
        marginNormal: {
          marginTop: 0
        }
    },
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

    return (
      <MuiThemeProvider  theme={theme}>
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
      </MuiThemeProvider>
    )
  }
}


export default withStyles(styles)(Summary)
