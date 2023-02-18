import React from 'react'

const Intro = () => {
  return (
    <div className='section intro' id='intro'>
      <h2 className="title">Tại sao lại Pizza 365</h2>
      <div className="intro__reasons">
        <div className="reason reason--1">
          <h3>Đa dạng</h3>
          <p>Số lượng pizza đa dạng, có đầy đủ các loại pizza đang hot nhất hiện nay.</p>
        </div>
        <div className="reason reason--2">
          <h3>Chất lượng</h3>
          <p>Nguyên liệu sạch 100%, rõ nguồn gốc, quy trình chế biến đảm bảo vệ sinh an toàn thực phẩm.</p>
        </div>
        <div className="reason reason--3">
          <h3>Hương vị</h3>
          <p>Đảm bảo hương vị ngon, độc, lạ mà bạn chỉ có thể trải nghiệm từ Pizza 365</p>
        </div>
        <div className="reason reason--4">
          <h3>Dịch vụ</h3>
          <p>Nhân viên thân thiện, nhà hàng hiện đại. Dịch vụ giao hàng nhanh, chất lượng, tân tiến</p>
        </div>
      </div>
    </div>
  )
}

export default Intro