import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./App.css";
import BusinessInsurance from "./components/BusinessInsurance";
import TaxiInsurance from "./components/TaxiInsurance";
import Agent1 from "./components/Agent1.jsx";
import Agent2 from "./components/Agent2.jsx";
import Agent3 from "./components/Agent3.jsx";
import Agent4 from "./components/Agent4.jsx";
import Agent5 from "./components/Agent5.jsx";
import Agent6 from "./components/Agent6.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business-insurance" element={<BusinessInsurance />} />
          <Route path="/taxi-insurance" element={<TaxiInsurance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/agents/agent1" element={<Agent1 />} />
          <Route path="/agents/agent2" element={<Agent2 />  } />
          <Route path="/agents/agent3" element={<Agent3 />  } />
          <Route path="/agents/agent4" element={<Agent4 />  } />
          <Route path="/agents/agent-leo" element={<Agent5 />  } />
          <Route path="/agents/agent-chris" element={<Agent6 />  } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
