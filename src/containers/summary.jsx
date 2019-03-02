import React from 'react'
import SummaryComponent from '../components/summary'
import { connect } from 'react-redux'

class Summary extends React.Component{
  isOpen(){
    return this.props.summary.open
  }

  render(){
    return <SummaryComponent open={this.isOpen()}/>
  }
}
const mapStateToProps = function(state){
  return {
    summary: state.summary
  }
}

export default connect(mapStateToProps)(Summary)
