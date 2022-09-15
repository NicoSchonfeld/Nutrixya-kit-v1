// ** Logo
import logo from "@src/assets/images/logo/logoNutrixya.svg";

const SpinnerComponent = () => {
  return (
    <div className="fallback-spinner app-loader">
      <img
        className="fallback-logo mb-3"
        src={logo}
        alt="logo"
        width={100}
        height={100}
      />
      <div className="loading">
        <div className="effect-1 effects"></div>
        <div className="effect-2 effects"></div>
        <div className="effect-3 effects"></div>
      </div>
    </div>
  );
};

export default SpinnerComponent;
