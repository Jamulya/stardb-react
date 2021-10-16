import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';
import SwapiService from '../../services/swapi-service';
import {SwapiProvider} from '../swapi-service-context';

import './app.css';

const swapi = new SwapiService()

const App = () => {
  return (
    <SwapiProvider value={swapi}>
      <Router>
      <div>
        <Header />
        <RandomPlanet />
        <PeoplePage />
        <PlanetsPage />
        <StarshipsPage />
        <Route to='/'/>
      </div>
      </Router>
    </SwapiProvider>
  );
};

export default App;
