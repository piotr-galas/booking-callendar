import React from 'react'
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import "moment/locale/pl";
import MomentUtils from "@date-io/moment";
import moment from 'moment'

moment.locale("pl");

const styles = theme => ({
  gridContainer: {
    flexGrow: 1,
  }
})


class Summary extends React.Component{

  handleStartDateChange = (date) => {
    this.props.handleStartDateChange(date.toDate())
  }

  handleEndDateChange = (date) => {
    this.props.handleEndDateChange(date.toDate())
  }

  render(){
    const { classes } = this.props;
    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <Grid container className={classes.gridContainer} spacing={16} justify="center" direction="row">
            <Grid item xs={6}>
              <DatePicker
                error={this.props.errors && !!this.props.errors.startDate}

                helperText={this.props.errors && !!this.props.errors.startDate ? this.props.errors.startDate : ""}
                margin="normal"
                label="Data początkowa"
                value={this.props.startDate}
                onChange={this.handleStartDateChange}
                variant="outlined"
                format="D MMMM"
                onOpen={() => this.props.handleSetStep(1)}
              />
            </Grid>
            <Grid item xs={6}>
              <DatePicker
                error={this.props.errors && !!this.props.errors.endDate}
                helperText={this.props.errors && !!this.props.errors.endDate ? this.props.errors.endDate : ""}

                margin="normal"
                label="Data końcowa"
                value={this.props.endDate}
                onChange={this.handleEndDateChange}
                variant="outlined"
                format="D MMMM"
                onOpen={() => this.props.handleSetStep(1)}
              />
            </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
    )
  }
}




export default withStyles(styles)(Summary)
