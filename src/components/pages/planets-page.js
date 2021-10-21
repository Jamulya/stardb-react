import React from 'react';
import {PlanetsList, PlanetDetail} from '../sw-components'
import Row from '../row';


class PlanetsPage extends React.Component {
  state = {
    selectedItemId: 3
  }

  onItemSelected = (id) => {
    this.setState({selectedItemId: id})
  }

  render() {
    const itemList = <PlanetsList onItemSelected={this.onItemSelected}/>
    const details = <PlanetDetail selectedItemId={this.state.selectedItemId} />

    return (
       <Row
        leftComponent={itemList}
        rightComponent={details}
      />
    )
  }
}


export default PlanetsPage