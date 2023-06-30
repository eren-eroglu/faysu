import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Preloader from "./Preloader"; // Import the Preloader component
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or any data loading process
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set the time to show the preloader (in milliseconds)
  }, []);

  return (
    <Router>
      {loading ? ( // Conditionally render the preloader
        <Preloader />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/faysu" element={<Home />} />
            <Route path="/faysu/hakkinda" element={<About />} />
            <Route path="/faysu/urunler" element={<Products />} />
            <Route path="/faysu/iletisim" element={<Contact />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;

