import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TableOrder from "./pages/TableOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={< Home/>}/>
        <Route path="/table" exact element={< TableOrder/>}/>
      </Routes>
    </Router>
  );
}

export default App;
