import React, { PureComponent } from 'react';
import { Input, notification } from 'antd';
import { Button} from 'antd';
import styled from 'styled-components';

import connect from 'react-redux/es/connect/connect';
import { addTeamUser } from '../reducers/teamReducer';
import { setUserProfile } from '../reducers/rootReducer';
import socket from './../socket'

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  span {
    display: inline-block;
    width: 300px;
    margin: 0 auto;
  }
  input {
    display: inline-block;
    width: 300px;
    margin: 0 auto;
  }
`;

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
    return <StyledLogin>
      <Input style={{marginBottom: '30px', marginLeft: '270px'}} placeholder="your name" value={this.state.login} onChange={(e) => this.setState({login: e.target.value})}/>
      <span><Button onClick={() => this.onSendClick()} type="primary" size="large">Send</Button></span>
    </StyledLogin>;
  }
}

export default connect(({profile}) => ({profile}), ({ setUserProfile, addTeamUser }))(Main);
