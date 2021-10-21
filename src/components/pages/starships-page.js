import React from 'react';
import {StarshipsList} from '../sw-components'
import { withRouter } from 'react-router-dom';



class StarshipsPage extends React.Component {
  onItemSelected = (id) => {this.props.history.push(id)}


  render() {
    return <StarshipsList onItemSelected={this.onItemSelected}/>
  }
}


export default withRouter(StarshipsPage)
