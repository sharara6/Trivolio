import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Analytics from "./Pages/Analytics";
import About from "./Pages/About";
import Trivia from "./Pages/TriviaQuestions";
import Navbar from './Pages/Navbar.jsx';
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";

function App() {
  return (
    
    <div>
      <h1>Navbar Simulation</h1>
      <AnswerFeedback isCorrect={true} answer={"the true one"} ></AnswerFeedback>
      <AnswerFeedback isCorrect={false} answer={"The false one"} ></AnswerFeedback>
import AnswerFeedback from "./Pages/Answer.jsx";

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/trivia" element={<Trivia />} />
          <Route path="/about" element={<About />} />
          <Route path="/trivia" element={<TriviaQuestions />} />
        </Routes>
      </Router>
  );
}

export default App;
