import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage} from '../pages';
import SwapiService from '../../services/swapi-service';
import {SwapiProvider} from '../swapi-service-context';

import './app.css';

const swapi = new SwapiService()

const App = () => {
  return (
    <SwapiProvider value={swapi}>
      <div>
        <Header />
        <RandomPlanet />

        <PeoplePage />
      </div>
    </SwapiProvider>
  );
};

export default App;
