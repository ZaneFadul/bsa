import React from 'react';
import Colors from './constants/Colors';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './bases/Header';
import Footer from './bases/Footer';
import Body from './bases/Body';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App"
        style={{
          background: `linear-gradient(${Colors.white},transparent)`,
          backgroundColor: `${Colors.pinker}`,
          }}>
        <Header />
        <Body/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
