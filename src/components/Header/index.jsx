import React, { PureComponent } from 'react';
import { string, oneOf } from 'prop-types';
import { Container } from './styles';
import  MissionsList  from './missions_list';
class Header extends PureComponent {
  render() {
    return <div>MissionList Component:
      <MissionsList/>
      </div>;
  }
}

Header.propTypes = {
  text: string,
  color: oneOf(['default', 'primary']),
};

Header.defaultProps = {
  text: 'Hi World',
  color: 'default',
};

export default Header;
