import React from 'react';
import {StarshipList, StarshipDetail} from '../sw-components'

import Row from '../row';


class StarshipPage extends React.Component {
  state = {
    selectedItemId: 3
  }

  onItemSelected = (id) => {
    this.setState({selectedItemId: id})
  }

  render() {
    const starshipList = <StarshipList onItemSelected={this.onItemSelected}/>
    const starshipstarshipDetails = <StarshipDetail selectedItemId={this.state.selectedItemId} />

    return (
      <Row
        leftComponent={starshipList}
        rightComponent={starshipstarshipDetails}
      />
    )
  }
}

export default StarshipPage