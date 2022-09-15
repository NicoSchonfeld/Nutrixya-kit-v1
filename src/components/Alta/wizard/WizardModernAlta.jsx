// ** React Imports
import { useRef, useState } from "react";

// ** Custom Components
import Wizard from "@components/wizard";

// ** Steps
import Cultivo from "./steps/Cultivo";
import Fertilizante from "./steps/Fertilizante";
import Suelo from "./steps/Suelo";
import LoteManjeo from "./steps/LoteManjeo";

// ** Icons Imports
import { FileText, User, MapPin, Link } from "react-feather";

const WizardModernAlta = () => {
  // ** Ref
  const ref = useRef(null);

  // ** State
  const [stepper, setStepper] = useState(null);

  const steps = [
    // {
    //   id: 'LoteManjeo',
    //   title: 'Lote y Manjeo',
    //   icon: <FileText size={18} />,
    //   content: <LoteManjeo stepper={stepper} type='wizard-modern' />
    // },
    {
      id: "Suelo",
      title: "Suelo",
      icon: <User size={18} />,
      content: <Suelo stepper={stepper} type="wizard-modern" />,
    },
    {
      id: "Cultivo",
      title: "Cultivo",
      icon: <MapPin size={18} />,
      content: <Cultivo stepper={stepper} type="wizard-modern" />,
    },
    {
      id: "Fertilizante",
      title: "Fertilizante",
      icon: <Link size={18} />,
      content: <Fertilizante stepper={stepper} type="wizard-modern" />,
    },
  ];

  return (
    <div className="modern-horizontal-wizard">
      <Wizard
        type="modern-horizontal"
        ref={ref}
        steps={steps}
        options={{
          linear: false,
        }}
        instance={(el) => setStepper(el)}
      />
    </div>
  );
};

export default WizardModernAlta;
