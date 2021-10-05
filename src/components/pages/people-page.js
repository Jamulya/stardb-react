import React from 'react';
import {PeopleList} from '../sw-components'
import {ItemDetails, Record} from '../person-details';
import Row from '../row';


class PeoplePage extends React.Component {
  state = {
    selectedItemId: 1
  }

  onItemSelected = (id) => {
    this.setState({selectedItemId: id})
  }

  render() {
    const itemList = <PeopleList onItemSelected={this.onItemSelected}/>
    

    const personDetails = (
      <ItemDetails selectedItemId={this.state.selectedItemId}>
       <Record label='Name' fieldName='name'/>
       <Record label='Eye color' fieldName='eyeColor'/>
       <Record label='Gender' fieldName='gender'/>
      </ItemDetails>
    )

    return (
      <Row
        leftComponent={itemList}
        rightComponent={personDetails}
      />
    )
  }
}

export default PeoplePage
