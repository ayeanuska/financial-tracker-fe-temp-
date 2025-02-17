import Modal from "react-bootstrap/Modal";
import { useUser } from "../context/UserContext";

export const CustomModal = ({ children }) => {
  const { showModal, setShowModal } = useUser();
  return (
    <Modal
      show={showModal}
      onHide={() => {
        setShowModal(false);
      }}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title> </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
