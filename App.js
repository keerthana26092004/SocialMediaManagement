import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import HomePage from "./Home";
import Dashboard from "./Dashboard";
import Layout from "./Layout";
import Stats from "./Stats";
import Graph from "./Graph";
import Login from "./Login";
import SignUp from "./SignUp";
import AboutUs from "./AboutUs";

import './styles/dashboard.css';
import './styles/graph.css';
import './styles/sidebar.css';
import './styles/stats.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
