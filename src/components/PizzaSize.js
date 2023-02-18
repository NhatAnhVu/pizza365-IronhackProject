import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const PizzaSize = () => {
  return (
    <div className='section pizza-size' id='pizza-size'>
      <h2 className="title">Chọn size pizza</h2>
      <p className='pizza-size__desc'>Chọn combo pizza phù hợp với nhu cầu của bạn</p>
      <div className="pizza-card">
        <Card className='card'>
          <Card.Body>
            <Card.Title>S (small)</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Đường kính: <b>20cm</b></ListGroup.Item>
            <ListGroup.Item>Sườn nướng: <b>2</b></ListGroup.Item>
            <ListGroup.Item>Salad: <b>200g</b></ListGroup.Item>
            <ListGroup.Item>Nước ngọt: <b>2</b></ListGroup.Item>
            <ListGroup.Item><b style={{fontSize: '2rem'}}>150.000</b> <br /> VNĐ</ListGroup.Item>
          </ListGroup>
          <Button variant="warning" className='card__button'>Chọn</Button>
        </Card>
        <Card className='card'>
          <Card.Body>
            <Card.Title>M (medium)</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Đường kính: <b>25cm</b></ListGroup.Item>
            <ListGroup.Item>Sườn nướng: <b>4</b></ListGroup.Item>
            <ListGroup.Item>Salad: <b>300g</b></ListGroup.Item>
            <ListGroup.Item>Nước ngọt: <b>3</b></ListGroup.Item>
            <ListGroup.Item><b style={{fontSize: '2rem'}}>200.000</b> <br /> VNĐ</ListGroup.Item>
          </ListGroup>
          <Button variant="warning" className='card__button'>Chọn</Button>
        </Card>
        <Card className='card'>
          <Card.Body>
            <Card.Title>L (large)</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Đường kính: <b>30cm</b></ListGroup.Item>
            <ListGroup.Item>Sườn nướng: <b>8</b></ListGroup.Item>
            <ListGroup.Item>Salad: <b>500g</b></ListGroup.Item>
            <ListGroup.Item>Nước ngọt: <b>4</b></ListGroup.Item>
            <ListGroup.Item><b style={{fontSize: '2rem'}}>250.000</b> <br /> VNĐ</ListGroup.Item>
          </ListGroup>
          <Button variant="warning" className='card__button'>Chọn</Button>
        </Card>
      </div>
    </div>
  )
}

export default PizzaSize