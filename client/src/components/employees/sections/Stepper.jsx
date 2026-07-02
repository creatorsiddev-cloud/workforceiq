import "../styles/Stepper.css";

function Stepper({ currentStep }) {
  const steps = [
    {
      number: 1,
      title: "Personal",
    },
    {
      number: 2,
      title: "Employment",
    },
    {
      number: 3,
      title: "Address",
    },
    {
      number: 4,
      title: "Review",
    },
  ];

  return (
    <div className="stepper">

      {steps.map((step, index) => {

        const isCompleted = currentStep > step.number;
        const isActive = currentStep === step.number;

        return (
          <div className="step-wrapper" key={step.number}>

            <div className="step-item">

              <div
                className={`step-circle
                ${isCompleted ? "completed" : ""}
                ${isActive ? "active" : ""}`}
              >
                {isCompleted ? "✓" : step.number}
              </div>

              <div className="step-content">

                <h4>{step.title}</h4>

                <p>Step {step.number}</p>

              </div>

            </div>

            {index !== steps.length - 1 && (
              <div
                className={`step-line ${
                  isCompleted ? "completed" : ""
                }`}
              ></div>
            )}

          </div>
        );
      })}

    </div>
  );
}

export default Stepper;