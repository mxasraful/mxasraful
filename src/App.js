import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Error from './components/Error/Error';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Skill from './components/Skill/Skill';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/blog">
            
          </Route>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/">
            <Banner/>
            <Work/>
            <Skill/>
          </Route>
          <Route exact path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;