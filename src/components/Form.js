import React, { useEffect, useState } from "react";

const Form = ({
  pizzaSize,
  pizzaType,
  drink,
  selectedSizeButton,
  selectedTypeButton
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [voucher, setVoucher] = useState("");
  const [discount, setDiscount] = useState(0)
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (voucher !== "") {
      const getVoucher = async () => {
        const res = await fetch(
          `http://203.171.20.210:8080/devcamp-pizza365/voucher_detail/${voucher}`
        );
        const data = await res.json();
        setDiscount(data.phanTramGiamGia)
        
      };
      getVoucher();
    }
  }, [voucher]);

  let orderRequest = {
    kichCo: pizzaSize.id,
    duongKinh: pizzaSize.duongKinh,
    suon: pizzaSize.suonNuong,
    salad: pizzaSize.salad,
    loaiPizza: pizzaType.type,
    idVourcher: voucher,
    idLoaiNuocUong: drink,
    soLuongNuoc: pizzaSize.nuocNgot,
    hoTen: name,
    thanhTien: pizzaSize.VND * (100 - discount)/100,
    email: email,
    soDienThoai: phone,
    diaChi: address,
    loiNhan: message,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedSizeButton === "" ) {
      alert("Hãy chọn size pizza!!!")
      return false
    }
    if (selectedTypeButton === "") {
      alert("Hãy chọn loại pizza!!!")
      return false
    }
    if (drink === "") {
      alert("Hãy chọn loại nước uống!!!")
      return false
    }
    if (name === "" || email === "" || phone === "" || address === "") {
      alert("Hãy nhập đủ thông tin liên hệ!!!")
      return false
    }
    const res = await fetch("http://203.171.20.210:8080/devcamp-pizza365/orders", {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(orderRequest)
    })
    const data = await res.json()
    alert("Mã order của bạn là: " + data.orderCode)
    window.location.reload()
  };

  return (
    <form className="section form" onSubmit={handleSubmit}>
      <h2 className="title">Thông tin đặt hàng</h2>
      <div className="form__info">
        <div className="form__info--item">
          <label>Tên</label>
          <input
            type="text"
            placeholder="Nhập tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__info--item">
          <label>Email</label>
          <input
            type="email"
            placeholder="Nhập Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form__info--item">
          <label>Số điện thoại</label>
          <input
            type="number"
            placeholder="Nhập Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form__info--item">
          <label>Địa chỉ</label>
          <input
            type="text"
            placeholder="Nhập Địa chỉ"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form__info--item">
          <label>Mã giảm giá</label>
          <input
            type="text"
            placeholder="Nhập Mã giảm giá"
            value={voucher}
            onChange={(e) => setVoucher(e.target.value)}
          />
        </div>
        <div className="form__info--item">
          <label>Lời nhắn</label>
          <input
            type="text"
            placeholder="Nhập Lời nhắn"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button>Gửi</button>
      </div>
    </form>
  );
};

export default Form;
