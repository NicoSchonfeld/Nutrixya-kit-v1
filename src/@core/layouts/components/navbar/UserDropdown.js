import { useState, useContext } from "react";

// ** React Imports
import { Link } from "react-router-dom";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Third Party Components
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power,
} from "react-feather";

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalFooter,
  Button,
} from "reactstrap";

// ** Default Avatar Image
import defaultAvatar from "@src/assets/images/portrait/small/avatar-s-11.jpg";

// ** import DataContext
import { DataContext } from "../../../../utility/context/LoteProvider";

const UserDropdown = () => {
  const { nombreUsuario } = useContext(DataContext);

  // ** State modal Account
  const [centeredModal, setCenteredModal] = useState(false);

  return (
    <>
      <div className="user-nav d-flex flex-column  me-1 gap-15-styles">
        <span className="name-accoutn-user fw-bolde text-end">
          {nombreUsuario}
        </span>
        <span
          onClick={() => setCenteredModal(!centeredModal)}
          className="btn-close-accoutn text-end"
        >
          Cerrar Sesión
        </span>
      </div>
      <Link
        to="/profile"
        className="d-flex align-items-center justify-content-center"
      >
        <Avatar
          img={defaultAvatar}
          imgHeight="40"
          imgWidth="40"
          status="online"
        />
      </Link>

      <div className="vertically-centered-modal">
        <Modal
          isOpen={centeredModal}
          // toggle={() => setCenteredModal(!centeredModal)}
          className="modal-dialog-centered"
        >
          {/* toggle={() => setCenteredModal(!centeredModal)} */}
          <ModalHeader>¿Seguro que quieres cerrar sesión?</ModalHeader>
          {/* <ModalBody>
            <h4> 1. Aceptación. El acceso a la plataforma</h4>
          </ModalBody> */}
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => setCenteredModal(!centeredModal)}
            >
              Cancelar
            </Button>

            <Link
              to="/login"
              className="btn btn-danger"
              // onClick={() => setCenteredModal(!centeredModal)}
            >
              Cerrar sesión
            </Link>
          </ModalFooter>
        </Modal>
      </div>
    </>
    // <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
    //   <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
    //     <div className='user-nav d-sm-flex d-none'>
    //       <span className='user-name fw-bold'>User Nutrixya</span>
    //       <span className='user-status'>User</span>
    //     </div>
    //     <Avatar img={defaultAvatar} imgHeight='40' imgWidth='40' status='online' />
    //   </DropdownToggle>
    //   <DropdownMenu end>
    //     <DropdownItem tag={Link} to='/profile'>
    //       <User size={14} className='me-75' />
    //       <span className='align-middle'>Profile</span>
    //     </DropdownItem>
    //     <DropdownItem tag={Link} to='/' onClick={e => e.preventDefault()}>
    //       <Mail size={14} className='me-75' />
    //       <span className='align-middle'>Inbox</span>
    //     </DropdownItem>
    //     <DropdownItem tag={Link} to='/' onClick={e => e.preventDefault()}>
    //       <CheckSquare size={14} className='me-75' />
    //       <span className='align-middle'>Tasks</span>
    //     </DropdownItem>
    //     <DropdownItem tag={Link} to='/' onClick={e => e.preventDefault()}>
    //       <MessageSquare size={14} className='me-75' />
    //       <span className='align-middle'>Chats</span>
    //     </DropdownItem>
    //     <DropdownItem divider />
    //     <DropdownItem tag={Link} to='/pages/' onClick={e => e.preventDefault()}>
    //       <Settings size={14} className='me-75' />
    //       <span className='align-middle'>Configuración</span>
    //     </DropdownItem>
    //     <DropdownItem tag={Link} to='/' onClick={e => e.preventDefault()}>
    //       <CreditCard size={14} className='me-75' />
    //       <span className='align-middle'>Pricing</span>
    //     </DropdownItem>
    //     <DropdownItem tag={Link} to='/' onClick={e => e.preventDefault()}>
    //       <HelpCircle size={14} className='me-75' />
    //       <span className='align-middle'>FAQ</span>
    //     </DropdownItem>

    //     <DropdownItem tag={Link} to='/login'>
    //       <Power size={14} className='me-75' />
    //       <span className='align-middle'>Cerrar Sesión</span>
    //     </DropdownItem>
    //   </DropdownMenu>
    // </UncontrolledDropdown>
  );
};

export default UserDropdown;
