import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Provider } from 'react-redux'
import rpgApp from './store';

import './styles/main.scss';

ReactDOM.render(
  <Provider store={rpgApp}>
    <App style={{height: '100%'}} />
  </Provider>
  , document.getElementById('root'));
