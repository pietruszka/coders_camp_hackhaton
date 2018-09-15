import React, { PureComponent } from 'react';
import { Input, notification } from 'antd';
import lodash from 'lodash';

import helmet from './img/images.png';
import connect from 'react-redux/es/connect/connect';
import { addTeamUser } from '../reducers/teamReducer';
import { setUserProfile } from '../reducers/rootReducer';
import socket from './../socket'


class Main extends PureComponent {
  constructor() {
    super();

    socket.on('welcome', ({user}) => {
      this.props.addTeamUser(user)
      this.openNotification(user)

    })

    // socket.on('socketClientID', (socketClientID) => {
    //   console.log('Connection to server established. SocketID is',socketClientID);
    //   // socket.emit('hello_from_client', 123);
    //   socket.on('welcome', ({user}) => {
    //     this.props.addTeamUser(user)
    //     this.openNotification(user)
    //
    //   })
    //
    //   socket.on('disconnected', function() {
    //     socket.disconnect();
    //   });
    // });
  }
  state = {
    login: '',
  }

  openNotification = (user) => {
    notification.open({
      message: (<div>{user} logged to application!!</div>),
    });
  }

  onSendClick = () => {
    socket.emit('login2', this.state.login);
    this.props.setUserProfile({name: this.state.login})
    this.props.addTeamUser(this.state.login)

  }

  render() {
    return <div>
      <Input placeholder="your name" value={this.state.login} onChange={(e) => this.setState({login: e.target.value})}/>
      <span onClick={() => this.onSendClick()}>Send</span>
    </div>;
  }
}

export default connect(({profile}) => ({profile}), ({ setUserProfile, addTeamUser }))(Main);
