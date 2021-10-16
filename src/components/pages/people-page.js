import React from 'react';
import {PeopleList, PersonDetail} from '../sw-components'

import Row from '../row';


class PeoplePage extends React.Component {
  state = {
    selectedItemId: 3
  }

  onItemSelected = (id) => {
    this.setState({selectedItemId: id})
  }

  render() {
    const itemList = <PeopleList onItemSelected={this.onItemSelected}/>
    const personDetails = <PersonDetail selectedItemId={this.state.selectedItemId} />
    return (
      <Row
        leftComponent={itemList}
        rightComponent={personDetails}
      />
   
    )
  }
}

export default PeoplePage
