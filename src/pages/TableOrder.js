import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ModalEdit from "../components/ModalEdit";
import ModelDelete from "../components/ModelDelete";

const TableOrder = () => {
  const [orderList, setOrderList] = useState([]);
  const [showModal, setShowModal] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState("");
  const [selectedOrderCode, setSelectedOrderCode] = useState("");

  useEffect(() => {
    const getOrders = async () => {
      const res = await fetch(
        "http://203.171.20.210:8080/devcamp-pizza365/orders"
      );
      const data = await res.json();
      setOrderList(data);
    };
    getOrders();
  }, []);

  return (
    <div className="tableOrder">
      {showModal === "delete" && (
        <ModelDelete
          orderList={orderList}
          selectedOrderId={selectedOrderId}
          setOrderList={setOrderList}
          setShowModal={setShowModal}
        />
      )}
      {showModal === "edit" && (
        <ModalEdit
          orderList={orderList}
          selectedOrderId={selectedOrderId}
          selectedOrderCode={selectedOrderCode}
          setOrderList={setOrderList}
          setShowModal={setShowModal}
        />
      )}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>OrderCode</th>
            <th>Người đặt hàng</th>
            <th>Điện thoại</th>
            <th>Size combo</th>
            <th>Loại Pizza</th>
            <th>Nước uống</th>
            <th>Lời nhắn</th>
            <th>Trạng thái</th>
            <th></th>
          </tr>
          {orderList.map((order) => {
            const {
              id,
              orderCode,
              hoTen,
              soDienThoai,
              kichCo,
              loaiPizza,
              idLoaiNuocUong,
              loiNhan,
              trangThai,
            } = order;
            return (
              <tr key={id}>
                <td>{orderCode}</td>
                <td>{hoTen}</td>
                <td>{soDienThoai}</td>
                <td>{kichCo}</td>
                <td>{loaiPizza}</td>
                <td>{idLoaiNuocUong}</td>
                <td>{loiNhan}</td>
                <td>{trangThai}</td>
                <td className="action">
                  <Button
                    onClick={() => {
                      setShowModal("edit");
                      setSelectedOrderId(id);
                      setSelectedOrderCode(orderCode)
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      setShowModal("delete");
                      setSelectedOrderId(id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </thead>
      </Table>
    </div>
  );
};

export default TableOrder;
