import React from 'react';
import Colors from './constants/Colors';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './bases/Header';
import Footer from './bases/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Blog from './pages/About';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App"
      style={{
        background: 'linear-gradient(white,transparent)',
        backgroundColor: `${Colors.pink}`,
        }}>
        <Header/>
      <Switch> 
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/blog" component={Blog}/>
        </Switch>
        <Footer/>
        </div>
      </Router>
  );
}

export default App;
