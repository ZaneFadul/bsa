import React from 'react';
import Colors from './constants/Colors';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App"
      style={{
        background: 'linear-gradient(white,transparent)',
        backgroundColor: `${Colors.pink}`,
        }}>

      </div>
      </Router>
  );
}

export default App;
