import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { originals, actions, romance, horror, comedy, documentary } from "./urls";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={actions} title='Action' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={documentary} title='Documentary' isSmall />
    </div>
  );
}

export default App;
