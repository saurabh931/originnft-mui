import React, { useState } from "react";
import Footer from "../Footer";
import Home from "../Home";
import Navbarnft from "../Navbars/Navbarnft";

export default function Main() {
  const [mode, setMode] = useState("dark");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <div>
      {/* <Navbarnft mode={mode} toggleMode={toggleMode} /> */}
      <Home mode={mode} toggleMode={toggleMode} />
      <Footer />
    </div>
  );
}
