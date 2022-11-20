import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Hometabs from "./Components/Hometabs"
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
