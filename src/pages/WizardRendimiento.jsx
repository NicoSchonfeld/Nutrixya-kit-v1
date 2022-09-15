import React, { useRef, useState } from "react";

import Wizard from "@components/wizard";

import BalanceDeN from "./nuevoResultado/BalanceDeN";
import Nutrientes from "./nuevoResultado/Nutrientes";
import AnalisisDeSensibilidad from "./nuevoResultado/AnalisisDeSensibilidad";
import BalanceCero from "./nuevoResultado/BalanceCero";

const WizardRendimiento = () => {
  const ref = useRef(null);

  const [stepper, setStepper] = useState(null);

  const steps = [
    {
      id: "balanceDeN",
      title: "Balance De N",
      // subtitle: "Enter Your Account Details.",
      content: <BalanceDeN stepper={stepper} type="wizard-vertical" />,
    },
    {
      id: "nutrientes",
      title: "Nutrientes",
      // subtitle: "Enter Your Account Details.",
      content: <Nutrientes stepper={stepper} type="wizard-vertical" />,
    },
    {
      id: "analisisDeInversion",
      title: "Análisis De inversión",
      // subtitle: "Enter Your Account Details.",
      content: (
        <AnalisisDeSensibilidad stepper={stepper} type="wizard-vertical" />
      ),
    },
    {
      id: "balanceCero",
      title: "Balance Cero",
      // subtitle: "Enter Your Account Details.",
      content: <BalanceCero stepper={stepper} type="wizard-vertical" />,
    },
  ];

  return (
    <>
      <div className="vertical-wizard">
        <Wizard
          type="vertical"
          ref={ref}
          steps={steps}
          options={{
            linear: false,
          }}
          instance={(el) => setStepper(el)}
        />
      </div>
    </>
  );
};

export default WizardRendimiento;
