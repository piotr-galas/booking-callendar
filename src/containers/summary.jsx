import React from 'react';
import SummaryComponent from '../components/summary';
import { connect } from 'react-redux';

class Summary extends React.Component{
  selectedItem(){
    return this.props.items.find((item) => {
      if(item.id == this.props.itemId){
        return item;
      }
    })

  }

  render(){
    return <SummaryComponent
      open={this.props.summary.open}
      selectedItem={this.selectedItem()}
    />
  }
}
const mapStateToProps = function(state){
  return {
    summary: state.summary,
    itemId: state.item.item_id,
    items: state.item.items
  }
}

export default connect(mapStateToProps)(Summary)
