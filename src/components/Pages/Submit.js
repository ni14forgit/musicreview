import { useState } from "react";
import AddQuestions from "../Submission/AddQuestions";
import SubmitMusic from "../Submission/SubmitMusic";
import Header from "../Navigation/Header";
import TextButton from "../Useful/TextButton";

const Submit = () => {
  const [step, setStep] = useState(0);
  const [canMoveOn, setCanMoveOn] = useState(true);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };
  return (
    <div>
      <Header />
      <div style={{ marginLeft: 25 }}>
        {step === 0 ? <SubmitMusic /> : null}
        {step === 1 ? <AddQuestions /> : null}
      </div>
      {canMoveOn ? (
        <div
          style={{
            display: "flex",
            // flexDirection: "column",
            marginTop: 10,
            // border: "2px solid black",
            justifyContent: "space-around",
          }}
        >
          <TextButton text="Back" fontWeight="bold" onClick={previousStep} />
          <TextButton text="Next" fontWeight="bold" onClick={nextStep} />
        </div>
      ) : null}
    </div>
  );
};

export default Submit;
