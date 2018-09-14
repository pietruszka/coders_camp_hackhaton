import React, { PureComponent } from 'react';
import { string, oneOf } from 'prop-types';
import { Container } from './styles';

class Header extends PureComponent {
  render() {
    return <div>header</div>;
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
