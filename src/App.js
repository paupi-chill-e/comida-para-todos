import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/landingPage'
import DonationPage from './pages/donationPage';
import AboutUs from './pages/aboutUsPage';
// import DataGridDemo from './components/intranetData/intranetTable';
import GetData from './components/intranetData/getData';
import LogIn from './components/intranetLogin/login';


export const ShowContext = React.createContext(null);

function App() {
  const [formToShow, setFormToShow] = useState(null);
  const [positionScroll, setPositionScroll] = useState(0);

  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <ShowContext.Provider value={[formToShow, setFormToShow]} value={[positionScroll, setPositionScroll]}>
            <LandingPage />
          </ShowContext.Provider>
        </Route>
        <Route path="/Donaciones" exact >
          <ShowContext.Provider value={[formToShow, setFormToShow]}>
            <DonationPage />
          </ShowContext.Provider>
        </Route>
        <ShowContext.Provider value={[positionScroll, setPositionScroll]}>
          <Route path="/Nosotros" exact >
            <AboutUs />
          </Route>
        </ShowContext.Provider>
        <Route path='/Intranet'>
          <LogIn />
          <GetData />
        </Route>
      </Switch>
    </Router >
  );
}
export default App;
