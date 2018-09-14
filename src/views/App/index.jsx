import React, { PureComponent, Fragment } from 'react';
import Header from 'components/Header';
import { Button } from 'antd';
class App extends PureComponent {

  render() {
    return (
      <Fragment>
        <Header text="Hello World!" color="primary" />
        <Button type="primary">Primary</Button>
      </Fragment>
    );
  }
}

export default App;
