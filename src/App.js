import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Test from './components/Test';
import Result from './components/Result';
import Personalities from './components/Personalities';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result/:type" element={<Result />} />
          <Route path="/personalities" element={<Personalities />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
