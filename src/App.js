import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/landingPage'
import DonationPage from './pages/donationPage';
import AboutUs from './pages/aboutUsPage';
// import LogIn from './';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <LandingPage />
        </Route>
        <Route path="/Donaciones" >
          <DonationPage />
        </Route>
        <Route path="/Nosotros">
          <AboutUs/>
        </Route>
        <Route path='/Intranet=?#!Login'>
          {/* <LogIn/> */}
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
