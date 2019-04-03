import React from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import pl from 'date-fns/locale/pl'

const styles = theme => ({
  title: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 2,
  },
});

class DatePicker extends React.Component {

  render(){
    const {classes} = this.props
    return (
      <div>
      <Typography component="h2" variant="h4" className={classes.title}>
        Wybierz date
      </Typography>
      <DateRange
        locale={pl}
        ranges={this.props.ranges}
        onChange={(ranges) => this.props.handleSelect(ranges)}
        disabledDates={this.props.disabledDates}
        direction="horizontal"
        showPreview={false}
        showSelectionPreview={false}
        showMonthAndYearPickers={false}
        showDateDisplay={false}
      />
  </div>
    );
  }
}

export default withStyles(styles)(DatePicker);
