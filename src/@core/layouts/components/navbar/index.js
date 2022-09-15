// ** React Imports
import { Fragment } from "react";

// ** Icon nav links
import { Mail, Home } from "react-feather";

// ** Configs
import themeConfig from "@configs/themeConfig";

// ** Custom Components
import NavbarUser from "./NavbarUser";

// ** Third Party Components
import { Sun, Moon, Menu } from "react-feather";

// ** Reactstrap Imports
import { NavItem, NavLink } from "reactstrap";

import { Link } from "react-router-dom";

// ** import Logo Nutrixya
import Logo from "../../../../assets/images/logo/logoNutrixya.svg";

const ThemeNavbar = (props) => {
  // ** Props
  const { skin, setSkin, setMenuVisibility } = props;

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === "dark") {
      return <Sun className="ficon" onClick={() => setSkin("light")} />;
    } else {
      return <Moon className="ficon" onClick={() => setSkin("dark")} />;
    }
  };

  // const NavMenuLinkss = () => {
  //   if (skin === 'dark') {
  //     return (
  //       <>
  //       <ul className="menu-ul-styles">
  //        <NavItem className='d-none d-lg-block'>
  //         <Link to={"/home"} className="Navlink-style-dark">
  //         <Home size={20} /> Home
  //         </Link>
  //         </NavItem>

  //         <NavItem className='d-none d-lg-block'>
  //         <Link to={"/alta"} className="Navlink-style-dark">
  //         <Mail size={20} /> Alta
  //         </Link>
  //         </NavItem>

  //         <NavItem className='d-none d-lg-block'>
  //         <Link to={"/arrancador"} className="Navlink-style-dark">
  //         <Mail size={20} /> Arrancador
  //         </Link>
  //         </NavItem>

  //         <NavItem className='d-none d-lg-block'>
  //         <Link to={"/balanceCero"} className="Navlink-style-dark">
  //         <Mail size={20} /> BalanceCero
  //         </Link>
  //         </NavItem>

  //         <NavItem className='d-none d-lg-block'>
  //         <Link to={"/balanceN"} className="Navlink-style-dark">
  //         <Mail size={20} /> BalanceN
  //         </Link>
  //         </NavItem>

  //         <NavItem className='d-none d-lg-block'>
  //         <Link to={"/fertilizantes"} className="Navlink-style-dark">
  //         <Mail size={20} /> Fertilizantes
  //         </Link>
  //         </NavItem>

  //         <NavItem className='d-none d-lg-block'>
  //         <Link to={"/formulaAbono"} className="Navlink-style-dark">
  //         <Mail size={20} /> FormulaAbono
  //         </Link>
  //         </NavItem>

  //         <NavItem className='d-none d-lg-block'>
  //         <Link to={"/rendimiento"} className="Navlink-style-dark">
  //         <Mail size={20} /> Rendimiento
  //         </Link>
  //         </NavItem>
  //        </ul>
  //       </>
  //     )
  //   } else {
  //     return (
  //     <>
  //       <ul className="menu-ul-styles">
  //        <NavItem className='d-none d-lg-block'>
  //         <Link to={"/home"} className="Navlink-style-light">
  //         <Home size={20} /> Home
  //         </Link>
  //         </NavItem>

  //         <NavItem className='d-none d-lg-block'>
  //         <Link to={"/alta"} className="Navlink-style-light">
  //         <Mail size={20} /> Alta
  //         </Link>
  //         </NavItem>

  //         <NavItem className='d-none d-lg-block'>
  //         <Link to={"/arrancador"} className="Navlink-style-light">
  //         <Mail size={20} /> Arrancador
  //         </Link>
  //         </NavItem>

  //         <NavItem className='d-none d-lg-block'>
  //         <Link to={"/balanceCero"} className="Navlink-style-light">
  //         <Mail size={20} /> BalanceCero
  //         </Link>
  //         </NavItem>

  //         <NavItem className='d-none d-lg-block'>
  //         <Link to={"/balanceN"} className="Navlink-style-light">
  //         <Mail size={20} /> BalanceN
  //         </Link>
  //         </NavItem>

  //         <NavItem className='d-none d-lg-block'>
  //         <Link to={"/fertilizantes"} className="Navlink-style-light">
  //         <Mail size={20} /> Fertilizantes
  //         </Link>
  //         </NavItem>

  //         <NavItem className='d-none d-lg-block'>
  //         <Link to={"/formulaAbono"} className="Navlink-style-light">
  //         <Mail size={20} /> FormulaAbono
  //         </Link>
  //         </NavItem>

  //         <NavItem className='d-none d-lg-block'>
  //         <Link to={"/rendimiento"} className="Navlink-style-light">
  //         <Mail size={20} /> Rendimiento
  //         </Link>
  //         </NavItem>
  //        </ul>
  //       </>
  //     )
  //   }
  // }

  return (
    <Fragment>
      <div className="bookmark-wrapper d-flex align-items-center">
        {/* <ul className='navbar-nav d-xl-none'>
          <NavItem className='mobile-menu me-auto'>
            <NavLink className='nav-menu-main menu-toggle hidden-xs is-active' onClick={() => setMenuVisibility(true)}>
              <Menu className='ficon' />
              
            </NavLink>
          </NavItem>
        </ul> */}

        {/* <NavMenuLinkss /> */}

        <ul className="nav navbar-nav">
          <NavItem>
            <Link to="/" className="ps-0 navbar-brand containerLogo-styles">
              <span className="brand-logo">
                <img src={Logo} alt="logo" />
              </span>
              <h2 className=" txtLogo fs-3 fw-bolder mb-0">Nutrixya</h2>
            </Link>
          </NavItem>
        </ul>
      </div>
      <NavbarUser skin={skin} setSkin={setSkin} />

      <NavItem className="d-none d-lg-block">
        <NavLink className="nav-link-style">
          <ThemeToggler />
        </NavLink>
      </NavItem>
    </Fragment>
  );
};

export default ThemeNavbar;
