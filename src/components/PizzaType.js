import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import pizzaMania from '../images/seafood.jpg'
import pizzaHawaiian from '../images/hawaiian.jpg'
import pizzaBacon from '../images/bacon.jpg'

const PizzaType = () => {
  return (
    <div className='section pizza-size'>
      <h2 className="title">Chọn loại pizza</h2>
      <div className="pizza-card">
        <Card className='card'>
          <Card.Img variant="top" src={pizzaMania} />
          <Card.Body>
            <Card.Title>OCEAN MANIA</Card.Title>
            <Card.Text>
              PIZZA HẢI SẢN XỐT MAYONAISE
            </Card.Text>
            <Card.Text>
              Sốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây.
            </Card.Text>
          </Card.Body>
          <Button variant="warning" className='card__button'>Chọn</Button>
        </Card>
        <Card className='card'>
          <Card.Img variant="top" src={pizzaHawaiian} />
          <Card.Body>
            <Card.Title>HAWAIIAN</Card.Title>
            <Card.Text>
              PIZZA DĂM BÔNG DỨA KIỂU HAWAII
            </Card.Text>
            <Card.Text>
              Sốt Cà Chua, Phô Mai Mozzarella, Thịt Dăm Bông, Thơm.
            </Card.Text>
          </Card.Body>
          <Button variant="warning" className='card__button'>Chọn</Button>
        </Card>
        <Card className='card'>
          <Card.Img variant="top" src={pizzaBacon} />
          <Card.Body>
            <Card.Title>CHEESY CHICKEN BACON</Card.Title>
            <Card.Text>
              PIZZA GÀ PHÔ MAI THỊT HEO XÔNG KHÓI
            </Card.Text>
            <Card.Text>
              Sốt Phô Mai, Thịt Gà, Thịt Heo Muối, Phô Mai Mozzarella, Cà Chua.
            </Card.Text>
          </Card.Body>
          <Button variant="warning" className='card__button'>Chọn</Button>
        </Card>
      </div>
    </div>
  )
}

export default PizzaType