import React from 'react';
import { PlanetsList, PlanetDetails} from '../sw-components'

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
    const details = <PlanetDetails selectedItemId={this.state.selectedItemId} />

    return (
      <Row
        leftComponent={itemList}
        rightComponent={details}
      />
    )
  }
}

export default PlanetsPage