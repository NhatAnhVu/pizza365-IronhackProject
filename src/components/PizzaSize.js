import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { pizzaSizeData } from "../data/pizzaSizeData";

const PizzaSize = ({ selectedSizeButton, handleSelectPizzaSize }) => {
  return (
    <div className="section pizza-size" id="pizza-size">
      <h2 className="title">Chọn size pizza</h2>
      <p className="pizza-size__desc">
        Chọn combo pizza phù hợp với nhu cầu của bạn
      </p>
      <div className="pizza-card">
        {pizzaSizeData.map((pizzaSize) => {
          return (
            <Card key={pizzaSize.id} className="card">
              <Card.Body>
                <Card.Title>{pizzaSize.size}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  Đường kính: <b>{pizzaSize.duongKinh}</b>
                </ListGroup.Item>
                <ListGroup.Item>
                  Sườn nướng: <b>{pizzaSize.suonNuong}</b>
                </ListGroup.Item>
                <ListGroup.Item>
                  Salad: <b>{pizzaSize.salad}</b>
                </ListGroup.Item>
                <ListGroup.Item>
                  Nước ngọt: <b>{pizzaSize.nuocNgot}</b>
                </ListGroup.Item>
                <ListGroup.Item>
                  <b style={{ fontSize: "2rem" }}>{pizzaSize.VND}</b> <br /> VNĐ
                </ListGroup.Item>
              </ListGroup>
              <Button
                variant="warning"
                className={selectedSizeButton === pizzaSize.id ? "card__button active-button": "card__button"}
                onClick={() => handleSelectPizzaSize(pizzaSize.id)}
              >
                Chọn
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PizzaSize;
