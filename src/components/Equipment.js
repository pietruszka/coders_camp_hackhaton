import React, {PureComponent} from 'react';
import ItemList from '../containers/item-list';
import ItemDetail from '../containers/item-detail';

class Equipment extends PureComponent {
  render() {
    return (
      <div>
        <ItemDetail/>
        <ItemList/>

      </div>
    );
  }
}

export default Equipment;
