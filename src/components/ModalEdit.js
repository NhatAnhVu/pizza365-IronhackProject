import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalEdit = ({
  orderList,
  selectedOrderId,
  selectedOrderCode,
  setOrderList,
  setShowModal,
}) => {
  const [status, setStatus] = useState("");

  const getOrder = async (selectedOrderCode) => {
    const res = await fetch(
      `http://203.171.20.210:8080/devcamp-pizza365/orders/${selectedOrderCode}`
    );
    const data = await res.json();
    return data;
  };

  const handleEdit = async (selectedOrderId) => {
    const orderToUpdate = await getOrder(selectedOrderCode);
    const updatedOrder = { ...orderToUpdate, trangThai: status };
    await fetch(
      `http://203.171.20.210:8080/devcamp-pizza365/orders/${selectedOrderId}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedOrder),
      }
    );
    setOrderList(
      orderList.map((order) => {
        return order.id === selectedOrderId
          ? { ...order, trangThai: status }
          : order;
      })
    );
    setShowModal("");
  };

  return (
    <Modal show onHide={() => setShowModal("")}>
      <Modal.Header closeButton>
        <Modal.Title>Cập nhật trạng thái đơn hàng</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <select
          onChange={(e) => setStatus(e.target.value)}
          style={{ width: "100%" }}
        >
          <option value="open">Open</option>
          <option value="confirmed">Confirmed</option>
          <option value="cancel">Cancel</option>
        </select>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => setShowModal("")} variant="secondary">
          Close
        </Button>
        <Button variant="primary" onClick={() => handleEdit(selectedOrderId)}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalEdit;
