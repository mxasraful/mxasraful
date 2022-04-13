import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Error from './components/Error/Error';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import PortfolioPage from './components/PortfolioPage/PortfolioPage';
import Skill from './components/Skill/Skill';
import './App.css';
import './responsive.css';
import BlogAndVideos from './components/BlogAndVideos/BlogAndVideos';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/blog-and-videos">
            <BlogAndVideos />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/">
            <Banner/>
            <PortfolioPage/>
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