import { Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar.jsx";

function homePage() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
      </div>
    </>
  );
}

export default homePage;
