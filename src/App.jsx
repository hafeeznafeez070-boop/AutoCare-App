import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/productPage";
import CartPage from "./pages/CartPage";

import NavBar from "./components/NavBar";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="product/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
