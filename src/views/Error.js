// ** React Imports
import { Link } from "react-router-dom";

// ** Reactstrap Imports
import { Button } from "reactstrap";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

// ** Styles
import "@styles/base/pages/page-misc.scss";

// ** import logo icon
import Logo from "../assets/images/logo/logo.svg";

const Error = () => {
  // ** Hooks
  const { skin } = useSkin();

  const illustration = skin === "dark" ? "error-dark.svg" : "error.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;
  return (
    <div className="misc-wrapper">
      <Link className="brand-logo" to="/login">
        <img src={Logo} alt="IconLogo" />

        <h2 className="brand-text text-primary ms-1">Nutrixya</h2>
      </Link>

      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <h2 className="mb-1">¡Oooooooooops!</h2>
          <p className="mb-2">Lo sentimos, la página no se encontro.</p>
          <Button
            tag={Link}
            to="/login"
            color="primary"
            className="btn-sm-block mb-2"
          >
            Volver al inicio
          </Button>
          <img className="img-fluid" src={source} alt="Not authorized page" />
        </div>
      </div>
    </div>
  );
};
export default Error;
