import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Hometabs from "./Components/Hometabs"
import Footer from "./Components/Footer";
import Main from "./Components/Pages/Main";

function App() {
  return (
    <div className="App">

    <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
         {/*  <Route
            path="/nft"
            element={<Nft1 mode={mode} toggleMode={toggleMode} />}
          /> */}
         {/*  <Route
            path="/exploreart"
            element={<Exploreart mode={mode} toggleMode={toggleMode} />}
          /> */}
         
        </Routes>
      </Router>
    {/*   <Navbar />
      <Home/>
      <Footer/> */}
    </div>
  );
}

export default App;
