import React from 'react';
import PersonalForm from '../../components/content/personalForm'
import { changePersonalData } from '../../actions/personalForm';
import { connect } from 'react-redux';


class PersonalFormContainer extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    event.persist()
    this.props.changePersonalData({[event.target.name]: event.target.value})
  }

  render(){
    return (
      <PersonalForm
        handleChange={this.handleChange}
        data={this.props.personalForm}
      />
    );
  }
}

const mapDispatchToProps = {
  changePersonalData
}

const mapStateToProps = function(state) {
  return {
    personalForm: state.personalForm
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalFormContainer);
