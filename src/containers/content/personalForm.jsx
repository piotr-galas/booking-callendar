import React from 'react';
import PersonalForm from '../../components/content/personalForm'
import { changePersonalData } from '../../actions/personalForm';
import { connect } from 'react-redux';


class PersonalFormContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    event.persist()
    this.setState({[event.target.name]: event.target.value}, () => this.props.changePersonalData(this.state))
  }

  render(){
    return (
      <PersonalForm
        handleChange={this.handleChange}
        data={this.state.data}
      />
    );
  }
}

const mapDispatchToProps = {
  changePersonalData
}
export default connect(null, mapDispatchToProps)(PersonalFormContainer);
