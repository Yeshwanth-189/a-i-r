import "./App.css";
import Navbar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        {/* Other pages will go below */}
        <div className="p-4">Welcome to ShopSmart</div>
      </div>
    </>
  );
}

export default App;
