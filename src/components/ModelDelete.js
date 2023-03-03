import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModelDelete = ({
  orderList,
  selectedOrderId,
  setOrderList,
  setShowModal,
}) => {
  const handleDelete = async (selectedOrderId) => {
    await fetch(
      `http://203.171.20.210:8080/devcamp-pizza365/orders/${selectedOrderId}`,
      {
        method: "DELETE",
      }
    );
    setOrderList(orderList.filter((order) => order.id !== selectedOrderId));
    setShowModal("");
  };

  return (
    <Modal show onHide={() => setShowModal("")}>
      <Modal.Header closeButton>
        <Modal.Title>Xóa đơn hàng</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Bạn có chắc chắn muốn xóa đơn hàng?</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => setShowModal("")} variant="secondary">
          Close
        </Button>
        <Button variant="danger" onClick={() => handleDelete(selectedOrderId)}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModelDelete;
