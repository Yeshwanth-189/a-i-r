import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/homePage";
import ProductPage from "./pages/productPage";
import SuccessPage from "./pages/successPage";
import "./App.css";

function App() {
  return (
    <div id="body" className="min-h-screen font-manrope">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
