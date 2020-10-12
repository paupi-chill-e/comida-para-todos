import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/landingPage'
import DonationPage from './pages/donationPage';
import AboutUs from './pages/aboutUsPage';
// import DataGridDemo from './components/intranetData/intranetTable';
import GetData from './components/intranetData/getData';
import Login from './components/intranetLogin/login'


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
        <Route path="/Nosotros" exact >
          <ShowContext.Provider value={[positionScroll, setPositionScroll]}>
            <AboutUs />
          </ShowContext.Provider>
        </Route>
        <Route path="/Intranet/Login" exact >
          <Login />
        </Route>
        <Route path="/Intranet/Formularios" exact>
          <GetData />
        </Route>
      </Switch>
    </Router >
  );
}
export default App;
