import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar' id='navbar'>
      <a href="#carousel" className='navbar__link'>Trang chủ</a>
      <a href="#pizza-size" className='navbar__link'>Combo</a>
      <a href="#pizza-type" className='navbar__link'>Loại pizza</a>
      <a href="#drink" className='navbar__link'>Đơn hàng</a>
      <NavLink to="/table" className='navbar__link'>Đăng nhập</NavLink>
    </div>
  )
}

export default Navbar