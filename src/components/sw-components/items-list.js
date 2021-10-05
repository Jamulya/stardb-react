import React from 'react';
import ItemList from '../item-list';
import withData from '../hoc'
import {SwapiConsumer}  from '../swapi-service-context';
import SwapiService from  '../../services/swapi-service';

const swapi = new SwapiService()
const {getAllPeople, getAllPlanets,getAllStarships} = swapi;

const withRenderFunction = (View, renderFunction) => {
  return (props) => {
    return <View {...props} renderFunction={renderFunction}/>
  }
}

const consumer_test = (View) => {
  return (props) => {
    return (
      <SwapiConsumer>
      {
        (swapiServiceObject) => {
          return <View {...props} swapi={swapiServiceObject} />
        }
      }
      </SwapiConsumer>
    )
  }
}

const PeopleList = (
  consumer_test(
    withData(
     withRenderFunction(
      ItemList,
       (item) => <span>{item.name} ({item.birthYear})</span>
     ),
     getAllPeople
    )
   )
  );

export {PeopleList}