import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Province from './components/Province';
import Schedule from './components/Schedule';
import List from './components/List';
import FamousPlaces from './components/FamousPlaces';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/province" element={<Province />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/list" element={<List />} />
          <Route path="/famousplaces" element={<FamousPlaces />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
