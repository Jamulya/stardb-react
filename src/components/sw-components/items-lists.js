import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService} from '../hoc'


const withRenderFunction = (View, renderFunction) => {
  return (props) => {
    return (
      <View {...props} renderFunction={renderFunction} />
    )
  }
}


const mapMathodsToProps = (swapi) => {
  return {
    getData: swapi.getAllPeople
  }
}


const PeopleList = (
  withSwapiService(
    withData(
      withRenderFunction(
        ItemList,
        (item) => <span>{item.name} ({item.birthYear})</span>
      )
    ),
    mapMathodsToProps
  )
);


export {PeopleList}
