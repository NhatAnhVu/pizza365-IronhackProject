import React from 'react'

const Form = () => {
  return (
    <div className='section form'>
      <h2 className="title">Chọn đồ uống</h2>
      <div className="form__info">
        <div className="form__info--item">
          <label>Tên</label>
          <input type="text" placeholder='Nhập tên'/>
        </div>
        <div className="form__info--item">
          <label>Email</label>
          <input type="text" placeholder='Nhập Email'/>
        </div>
        <div className="form__info--item">
          <label>Số điện thoại</label>
          <input type="text" placeholder='Nhập Số điện thoại'/>
        </div>
        <div className="form__info--item">
          <label>Địa chỉ</label>
          <input type="text" placeholder='Nhập Địa chỉ'/>
        </div>
        <div className="form__info--item">
          <label>Mã giảm giá</label>
          <input type="text" placeholder='Nhập Mã giảm giá'/>
        </div>
        <div className="form__info--item">
          <label>Lời nhắn</label>
          <input type="text" placeholder='Nhập Lời nhắn'/>
        </div>
        <button >Gửi</button>
      </div>
    </div>
  )
}

export default Form