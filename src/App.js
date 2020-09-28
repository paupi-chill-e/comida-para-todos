import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/landingPage'
import LandingSecond from './pages/landingSecond';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <LandingPage />
        </Route>
        <Route path="/Second" >
          <LandingSecond />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
