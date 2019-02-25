import React from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

class Steps extends React.Component {
  render(){
    const { activeStep } = this.props;
    const { steps } = this.props;

    return  (
      <Stepper activeStep={activeStep}>
        { steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
                );
          })}
      </Stepper>)
  }
}

export default Steps;
