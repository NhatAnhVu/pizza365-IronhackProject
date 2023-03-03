import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar' id='navbar'>
      <a href="#carousel" className='navbar__link'>Trang chủ</a>
      <a href="#pizza-size" className='navbar__link'>Combo</a>
      <a href="#pizza-type" className='navbar__link'>Loại pizza</a>
      <a href="#drink" className='navbar__link'>Đơn hàng</a>
    </div>
  )
}

export default Navbar