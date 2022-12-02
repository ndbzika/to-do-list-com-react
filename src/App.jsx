import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./Pages/Home";
import { InfoTask } from "./Pages/InfoTask";
import Header from "./components/Header";

import "./App.css"


const App = () => {
  return(
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}
          />
          <Route path="/:taskTitle" element={<InfoTask/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;