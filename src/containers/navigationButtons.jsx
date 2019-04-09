import React from 'react';
import { connect } from 'react-redux';
import { nextStep, previousStep} from '../actions/stepper'
import NavigationButtonsComponent from '../components/navigationButtons'

import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

const CREATE_RESERVATION = gql`
mutation($description: String, $startDate: ISO8601DateTime, $endDate: ISO8601DateTime, $firstName: String,
$lastName: String, $email: String, $phone: String, $itemId: Int
)
{
  reservationForItem(input:{
    orderAttributes: {
      description: $description
      startDate: $startDate
      endDate: $endDate
    },
    borrowerAttributes:{
      firstName: $firstName
      lastName: $lastName
      email: $email
      phone: $phone
    },
    itemId: $itemId
  }){
    borrower{
      firstName
    }
  }
}
`;

class NavigationButtons extends React.Component{
  handleNext() {
    this.props.nextStep(this.props.activeStep)
  };

  handlePrevious() {
    this.props.previousStep(this.props.activeStep)
  };

  mutationVariables() {
    return {variables: {
      itemId: parseInt(this.props.itemId),
      startDate: this.props.startDate,
      endDate: this.props.endDate,
      firstName: this.props.personalForm.firstName,
      lastName: this.props.personalForm.lastName,
      email: this.props.personalForm.email,
      phone: this.props.personalForm.phone,
      description: this.props.personalForm.description  }}
  }

  render(){
    return(
      <Mutation mutation={CREATE_RESERVATION}>
        { (itemReservation, {data}) => {
          return (<NavigationButtonsComponent
            steps={this.props.steps}
            activeStep={this.props.activeStep}
            handleNext={this.handleNext.bind(this)}
            handlePrevious={this.handlePrevious.bind(this)}
            handleItemReservation={() => itemReservation(this.mutationVariables())}
          />
      )}}

    </Mutation>
    )
  }
}

const mapStateToProps = function(state) {
  return {
    itemId: state.item.item_id,
    personalForm: state.personalForm.data,
    startDate: state.rangePicker.selection.startDate,
    endDate: state.rangePicker.selection.endDate,

    activeStep: state.step.activeStep,
    steps: state.step.steps
  }
}
const mapDispatchToProps = {
  nextStep,
  previousStep,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationButtons)
