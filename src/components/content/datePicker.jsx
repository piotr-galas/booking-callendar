import React from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import pl from 'date-fns/locale/pl'

class DatePicker extends React.Component {

  render(){

    return (
      <DateRange
        locale={pl}
        ranges={this.props.ranges}
        onChange={(ranges) => this.props.handleSelect(ranges)}
        disabledDates={this.props.disabledDates}
        direction="horizontal"
      />
    );
  }
}

export default DatePicker;
