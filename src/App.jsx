import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./App.css";
import BusinessInsurance from "./components/BusinessInsurance";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business-insurance" element={<BusinessInsurance/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
