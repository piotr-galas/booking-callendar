import React from 'react';
import BookingToolComponent from '../components/bookingTool'
import { connect } from 'react-redux'


class BookingTool extends React.Component {
  render() {
    return <BookingToolComponent thankYou={this.props.displayThankYou} />
  }
}


const mapStateToProps = function(state) {
  return {
    displayThankYou: state.step.displayThankYou,
  }
}

export default connect(mapStateToProps)(BookingTool);
