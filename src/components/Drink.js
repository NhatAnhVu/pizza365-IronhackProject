import React from 'react'

const Drink = () => {
  return (
    <div className='section drink'>
      <h2 className="title">Chọn đồ uống</h2>
      <select className='drink__select'>
        <option value="0">Tất cả các loại nước uống</option>
      </select>
    </div>
  )
}

export default Drink