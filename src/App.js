import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head_Meta from "./components/header/Head_Meta";
import Home from "./pages/Home";
import Staff from "./pages/Staff";

function App() {
  return (
    <Router>
      <div className="App">
        <Head_Meta /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
