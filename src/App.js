import "./App.css";
import Headers from "./components/Headers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import NotFoundError from "./components/NotFoundError";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Headers />
        <Routes>
        <Route exact path="/" element={ <ProductList /> }></Route>
        <Route exact path="/product/:id" element={ <ProductDetails /> }></Route>
        <Route exact path="/404-Error" element={ <NotFoundError /> }></Route>
        <Route exact path="/add-product" element={ <AddProduct /> }></Route>
        <Route exact path="product/update/:id" element={ <UpdateProduct /> }></Route>
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
