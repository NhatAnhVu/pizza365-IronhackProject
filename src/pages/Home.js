import Navbar from "../components/Navbar";
import CarouselBootstrap from "../components/Carousel";
import Intro from "../components/Intro";
import PizzaSize from "../components/PizzaSize";
import PizzaType from "../components/PizzaType";
import Drink from "../components/Drink";
import Form from "../components/Form";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { pizzaSizeData } from "../data/pizzaSizeData";
import { pizzaTypeData } from "../data/pizzaTypeData";

const Home = () => {
  const [drinkList, setDrinkList] = useState([]);
  const [pizzaSize, setPizzaSize] = useState({});
  const [pizzaType, setPizzaType] = useState({});
  const [selectedSizeButton, setSelectedSizeButton] = useState("");
  const [selectedTypeButton, setSelectedTypeButton] = useState("");
  const [drink, setDrink] = useState("");

  useEffect(() => {
    const getDrinkList = async () => {
      const res = await fetch(
        "http://203.171.20.210:8080/devcamp-pizza365/drinks"
      );
      const data = await res.json();
      setDrinkList(data);
    };
    getDrinkList();
  }, []);

  const handleSelectPizzaSize = (size) => {
    setSelectedSizeButton(size);
    if (size === "S") {
      setPizzaSize(pizzaSizeData[0]);
    }
    if (size === "M") {
      setPizzaSize(pizzaSizeData[1]);
    }
    if (size === "L") {
      setPizzaSize(pizzaSizeData[2]);
    }
  };

  const handleSelectPizzaType = (type) => {
    setSelectedTypeButton(type);
    if (type === "ocean") {
      setPizzaType(pizzaTypeData[0]);
    }
    if (type === "hawaiian") {
      setPizzaType(pizzaTypeData[1]);
    }
    if (type === "bacon") {
      setPizzaType(pizzaTypeData[2]);
    }
  };

  const handleSelectDrink = (event) => {
    setDrink(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <CarouselBootstrap />
      <Intro />
      <PizzaSize
        selectedSizeButton={selectedSizeButton}
        handleSelectPizzaSize={handleSelectPizzaSize}
      />
      <PizzaType
        selectedTypeButton={selectedTypeButton}
        handleSelectPizzaType={handleSelectPizzaType}
      />
      <Drink drinkList={drinkList} handleSelectDrink={handleSelectDrink} />
      <Form
        pizzaSize={pizzaSize}
        pizzaType={pizzaType}
        drink={drink}
        selectedSizeButton={selectedSizeButton}
        selectedTypeButton={selectedTypeButton}
      />
      <Footer />
    </div>
  )
}

export default Home