import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ProtectedRoute from "./context/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Head_Meta from "./components/header/Head_Meta";
import Home from "./pages/Home";
import Staff from "./pages/Staff";
import Mobile_acc_page from "./pages/Mobile_acc";
import Login from "./pages/Login";
import SetPassword from "./pages/SetPassword";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Head_Meta /> 
          <Routes>
            <Route path="/" element={<Navigate to={"/login"} />} />
            <Route element={<ProtectedRoute />} >
              <Route  path="/home" element={<Home />} /> 
              <Route  path="/staff" element={<Staff />} /> 
            </Route>
            <Route path="/mobile_acc" element={<Mobile_acc_page />} />
            <Route path="/login" element={<Login />} />
            <Route path="/set_password" element={<SetPassword />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
