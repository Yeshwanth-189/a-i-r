import { Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar.jsx";
import Home from "./pages/homePage.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Router>
          <Route path="/" element={<Home />} />
        </Router>
      </div>
    </>
  );
}

export default App;
