import React from "react";
import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar/Navbar";

import Homepage from "./pages/homepage/Homepage";
import Contacts from "./pages/contacts/Contacts";
import About from "./pages/about/About";
import Programs from "./pages/programs/Programs";

function App() {
  return (
    <div className="webHolder">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
