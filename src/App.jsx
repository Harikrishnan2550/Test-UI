import React from "react";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import OneImage from "./Components/OneImage";
import More from "./Components/More";
import Recent from "./Components/Recent";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-black">
      <Home />
      <div className="bg-gradient-to-b from-black to-[#221d1d]">
        <Trending />
        <OneImage/>
      </div>
      <More/>
      <div className="bg-gradient-to-b from-black to-[#1c1616]">
        <Recent/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

