import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
