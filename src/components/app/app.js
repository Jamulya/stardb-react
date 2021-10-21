import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, StarshipsPage, PlanetsPage} from '../pages';
import SwapiService from '../../services/swapi-service';
import {SwapiProvider} from '../swapi-service-context';
import {StarshipDetail} from '../sw-components'


import './app.css';

const swapi = new SwapiService()

const App = () => {
  return (
    <SwapiProvider value={swapi}>

      <Router>
      <div>
        <Header />
        <RandomPlanet />

      <Switch>
        <Route path='/' exact={true} render={() => <h1>Welcome page</h1>} />
        <Route path='/people/:id?' component={PeoplePage} />
        <Route path='/planets/' component={PlanetsPage} />

        <Route exact={true} path='/starships/' component={StarshipsPage} />
        <Route path='/starships/:id' render={({match, location, history}) => {
        return <StarshipDetail selectedItemId={match.params.id}/>
      }} />

       <Redirect to='/' />
     </Switch>

      </div>
      </Router>

    </SwapiProvider>
  );
};

export default App;
