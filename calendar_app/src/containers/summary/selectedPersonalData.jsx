import React from 'react'
import SelectedPersonalDataComponent from '../../components/summary/selectedPersonalData';
import { connect } from 'react-redux'

class SelectedPersonalData extends React.Component{
  render(){
    return <SelectedPersonalDataComponent
      personalForm={this.props.personalForm}
    />
  }
}

const mapStateToProps = function(state){
  return {
    personalForm: state.personalForm
  }
}
export default connect(mapStateToProps)(SelectedPersonalData)
