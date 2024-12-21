import { ReactElement, useState } from "react";

export default function useMultistep(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function next() {
    if (currentStep === steps.length - 1) return currentStep;
    return setCurrentStep(currentStep + 1);
  }
  function prev() {
    if (currentStep === 0) return currentStep;
    return setCurrentStep(currentStep - 1);
  }
  function isFirstStep() {
    return currentStep === 0;
  }
  function isLastStep() {
    return currentStep === steps.length - 1;
  }

  return {
    step: steps[currentStep],
    next,
    prev,
    isFirstStep,
    isLastStep,
  };
}
