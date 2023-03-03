import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { pizzaTypeData } from "../data/pizzaTypeData";

const PizzaType = ({ selectedTypeButton, handleSelectPizzaType }) => {
  return (
    <div className="section" id="pizza-type">
      <h2 className="title">Chọn loại pizza</h2>
      <div className="pizza-card">
        {pizzaTypeData.map((pizzaType) => {
          return (
            <Card key={pizzaType.id} className="card">
              <Card.Img variant="top" src={pizzaType.img} />
              <Card.Body>
                <Card.Title>{pizzaType.type}</Card.Title>
                <Card.Text>{pizzaType.name}</Card.Text>
                <Card.Text>{pizzaType.desc}</Card.Text>
              </Card.Body>
              <Button
                variant="warning"
                className={selectedTypeButton === pizzaType.id ? "card__button active-button": "card__button"}
                onClick={() => handleSelectPizzaType(pizzaType.id)}
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

export default PizzaType;
