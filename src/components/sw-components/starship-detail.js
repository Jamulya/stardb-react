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
      <Record label='Name' fieldName='name' />
      <Record label='Eye color' fieldName='eyeColor' />
      <Record label='Gender' fieldName='gender' />
    </ItemDetails>
  )
}

export default withSwapiService(StarshipDetail, mapMathodsToProps);