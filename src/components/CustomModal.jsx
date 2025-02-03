import Modal from "react-bootstrap/Modal";

export const CustomModal = ({ children }) => {
  return (
    <Modal
      show={false}
      onHide={() => {}}
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
