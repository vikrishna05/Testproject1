import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './Home';
import OnlineAssistant from './OnlineAssistant';
import Contact from './Contact';
import Feedback from './Feedback';
import './styles.css'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/online-assistant">Online Assistant</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/online-assistant" element={<OnlineAssistant />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
