import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";
import About from "./Pages/About";
import Trivia from "./Pages/TriviaQuestions";

function App() {
  return (
    <div>
      <h1>Navbar Simulation</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Trivia />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <h1>Footer Simulation</h1>
    </div>
  );
}

export default App;
