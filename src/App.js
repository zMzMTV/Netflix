import React from "react";
import "./App.css";

import Sections from "./components/Sections";

import data from "./assets/data.json";

import Logo from "./assets/img/logoNetflix.png";

function App() {
  return (
    <>
      <img src={Logo} alt="" />
      <Sections data={data} />
    </>
  );
}

export default App;
