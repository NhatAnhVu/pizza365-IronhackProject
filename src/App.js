import Navbar from "./components/Navbar";
import CarouselBootstrap from "./components/Carousel";
import Intro from "./components/Intro";
import PizzaSize from "./components/PizzaSize";
import PizzaType from "./components/PizzaType";
import Drink from "./components/Drink";
import Form from "./components/Form";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <CarouselBootstrap />
      <Intro />
      <PizzaSize />
      <PizzaType />
      <Drink />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
