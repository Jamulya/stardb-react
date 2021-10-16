import React, {useState} from 'react';
import {PeopleList, PersonDetail} from '../sw-components'
import Row from '../row';


const PeoplePage = () => {
  const [selectedItemId, setSelectedItemId] = useState('id')
}

class PeoplePage2 extends React.Component {
  state = {
    selectedItemId: 4
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
<PeoplePage2/>

export default PeoplePage
