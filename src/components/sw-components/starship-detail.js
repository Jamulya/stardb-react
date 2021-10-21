import React from 'react';
import {ItemDetails, Record} from '../item-details';
import {withSwapiService} from '../hoc'


const mapMathodsToProps = (swapi) => {
  return {
    getData: swapi.getStarship,
    getImage: swapi.getStarshipImage,
  }
}


const StarshipDetail = (props) => {
  return (
    <ItemDetails {...props}>
      <Record label='Manufacturer:' fieldName='manufacturer' />
      <Record label='Crew:' fieldName='crew' />
      <Record label='Cargo capacity:' fieldName='cargoCapacity' />
    </ItemDetails>
  )
}


export default withSwapiService(StarshipDetail, mapMathodsToProps);