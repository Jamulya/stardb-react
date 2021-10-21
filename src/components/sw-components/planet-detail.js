import React from 'react';
import {ItemDetails, Record} from '../item-details';
import {withSwapiService} from '../hoc'


const mapMathodsToProps = (swapi) => {
  return {
    getData: swapi.getPlanet,
    getImage: swapi.getPlanetImage,
  }
}


const PlanetDetail = (props) => {
  return (
    <ItemDetails {...props}>
      <Record label='Population:' fieldName='population' />
      <Record label='Rotation period:' fieldName='rotationPeriod' />
      <Record label='Diameter:' fieldName='diameter' />
    </ItemDetails>
  )
}


export default withSwapiService(PlanetDetail, mapMathodsToProps);