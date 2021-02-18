import React, { useState } from 'react';
import Colors from './constants/Colors';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './bases/Header';
import Footer from './bases/Footer';
import Body from './bases/Body';
import './App.css';

function App() {
  const [style, changeStyle] = useState(Colors['main']);
  return (
    <Router>
      <div className="App"
        style={{
          background: `linear-gradient(${style.backgroundPrimary},transparent)`,
          backgroundColor: `${style.backgroundSecondary}`,
        }}>
        <Header style={style}/>
        <Body style={style} changeStyleTo={changeStyle}/>
        <Footer style={style}/>
      </div>
    </Router>
  );
}

export default App;
