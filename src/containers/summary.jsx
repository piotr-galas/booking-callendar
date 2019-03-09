import React from 'react';
import SummaryComponent from '../components/summary';
import { connect } from 'react-redux';

class Summary extends React.Component{
  render(){
    return <SummaryComponent open={this.props.summary.open} />
  }
}
const mapStateToProps = function(state){
  return {
    summary: state.summary,
  }
}

export default connect(mapStateToProps)(Summary)
