import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/productPage";
import NavBar from "./components/NavBar";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<ProductPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
