import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
import RomanNumeralConverter from "./components/RomanNumeralConverter";

function App() {
    return (
        <>
            <Router>
                <div className="App">
                    <Navbar />
                </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="roman-numeral-converter" element={<RomanNumeralConverter />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;