import React, {PureComponent} from 'react';
import ItemList from '../containers/item-list';
import ItemDetail from '../containers/item-detail';

class Equipment extends PureComponent {
  render() {
    return (
      <div>
        <ItemList/>
        <ItemDetail/>
      </div>
    );
  }
}

export default Equipment;
