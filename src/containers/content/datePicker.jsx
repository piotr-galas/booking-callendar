import React from 'react';
import DatePickerComponent from '../../components/content/datePicker'
import { connect } from 'react-redux'
import { selectRange } from '../../actions/dateRange'
import moment from 'moment'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_DISABLED_DAYS = gql`
query($itemId: Int!){
	reservedDays(itemId:$itemId)
}
`;

class DatePickerContainer extends React.Component {
  // formattedRange fixes timezone problem
  handleSelect(range){
    const startDate = moment(range.selection.startDate).add(4, "h").toDate()
    const endDate = moment(range.selection.endDate).add(4, "h").toDate()
    const formattedRange = { selection: {startDate, endDate, key: "selection"}}
    this.props.selectRange(formattedRange)
  }

  render(){

		return (
      <Query query={GET_DISABLED_DAYS} variables={ {itemId: parseInt(this.props.itemId)}}>
        {({data: reservedDays}, loading) => {
          if (loading || !reservedDays || !reservedDays.reservedDays) {
            return <div>Loading ...</div>;
          }

          return (<DatePickerComponent
            handleSelect={this.handleSelect.bind(this)}
            ranges={[this.props.range]}
            disabledDates={reservedDays.reservedDays}
          />)
        }}
      </Query>
		)
	}

}
const mapDispatchToProps = {
  selectRange
}
const mapStateToProps = function(state){
  return {
    range: state.rangePicker.selection,
		itemId: state.item.item_id
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatePickerContainer);
