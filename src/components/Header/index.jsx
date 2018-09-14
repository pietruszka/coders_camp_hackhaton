import React, { PureComponent } from 'react';
import { string, oneOf } from 'prop-types';
import Ekwipunek from '../ekwipunek/ekwipunek'
import { Container } from './styles';

class Header extends PureComponent {
  render() {
    return <Ekwipunek />;
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
