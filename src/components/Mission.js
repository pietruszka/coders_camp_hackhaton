import React, { PureComponent } from 'react';
import MissionList from './Header/missions_list';
class Mission extends PureComponent {
  render() {
    return (
      <div>
        <MissionList />
      </div>
    );
  }
}

export default Mission;
