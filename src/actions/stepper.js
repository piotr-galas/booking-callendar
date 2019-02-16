export function nextStep(currentStep){
  return {type: "NEXT_STEP", payload: {
    activeStep: Math.min(2, currentStep + 1)
  }}
}

export function previousStep(currentStep){
  return {type: "PREVIOUS_STEP", payload: {
    activeStep: Math.max(0, currentStep - 1)
  }}
}

export function fetchSteps(){
  const steps =  ['Nosideło', 'Termin', 'Dane kontaktowe'];
  return { type: "FETCH_STEPS", payload: {steps} }
}
