import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Head_Meta from "./components/header/Head_Meta";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import Mobile_acc_page from "./pages/Mobile_acc";
import Login from "./pages/Login";
import SetPassword from "./pages/SetPassword";

function App() {
  return (
    <Router>
      <div className="App">
        <Head_Meta /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/mobile_acc" element={<Mobile_acc_page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/set_password" element={<SetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
