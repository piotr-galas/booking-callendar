import React from 'react';
import ThankYouComponent from '../components/thankYou';
import { connect } from 'react-redux';


class ThankYou extends React.Component{
  render(){
    return <ThankYouComponent personalForm={this.props.personalForm}/>
  }
}


const mapStateToProps = function(state){
  return {
    personalForm: state.personalForm,
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou)
