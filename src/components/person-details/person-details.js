import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

const Record = ({label, fieldName, item}) => {
  console.log(item);
  return (
    <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{fieldName}</span>
  </li>
  )
}

 class ItemDetails extends Component {
  swapi = new SwapiService()

  state = {
    item: {},
    load: true,
    error: false,
  }

  componentDidMount() {
    const id = this.props.selectedItemId
    this.swapi.getPlanet(id).then((data) => {
      this.setState({
        planet: data,
        load: false,
      })
    }).catch((err) => {
      this.setState({
        load: false,
        error: true,
      })
    })    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItemId !== this.props.selectedItemId) {
      const id = this.props.selectedItemId
      this.swapi.getPerson(id).then(data => this.setState({item: data}))
    }
  }

  render() {
    const {id, name, gender, birthYear, eyeColor} = this.state.item;

    if (this.state.load) {
      return <Spinner />
    }

    if (this.state.error) {
      return <ErrorIndicator />
    }
  
    return (
      <div className="person-details card">
        <img className="person-image" 
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
              
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children,(item) => {
              const newElement = React.cloneElement(item,{this: this.state.item})
              return newElement;
              }
             )
            }
          

            {/* <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
             */}
          </ul>
        </div>
      </div>
    )
  }
}

export {Record, ItemDetails}
