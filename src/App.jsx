import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Deneme from "./Deneme";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/faysu" element={<Home />} />
        <Route path="/faysu/hakkinda" element={<About />} />
        <Route path="/faysu/urunler" element={<Products />} />
        <Route path="/faysu/iletisim" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
