import "./App.css";
import Navbar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Route path="/" element={<Home />} />
      </div>
    </>
  );
}

export default App;
