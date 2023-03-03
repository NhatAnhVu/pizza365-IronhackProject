import React from 'react'

const Drink = ( {drinkList, handleSelectDrink} ) => {
  return (
    <div className='section drink' id='drink'>
      <h2 className="title">Chọn đồ uống</h2>
      <select className='drink__select' onChange={e => handleSelectDrink(e)}>
        <option value="0">Chọn loại nước uống</option>
        {drinkList.map(drink => {
          return <option key={drink.maNuocUong} value={drink.maNuocUong}>{drink.tenNuocUong}</option>
        })}
      </select>
    </div>
  )
}

export default Drink