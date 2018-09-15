import React, { Fragment, PureComponent } from 'react';
import connect from 'react-redux/es/connect/connect';
import { setUserProfile } from '../reducers/rootReducer';
import { addTeamUser, kickTeamUser } from '../reducers/teamReducer';
import Gravatar from 'react-gravatar'
import styled from 'styled-components';
import { notification } from 'antd';
import helmet from './img/images.png';
const ReactMarkdown = require('react-markdown')
import socket from './../socket';

const StyledQuestion = styled(ReactMarkdown)`
  background-color: #9ea93f;
  padding: 10px 0;
  color: #fff;
  border-radius: 3px;
  border-bottom: 2px #60712f solid;
  text-align: center;
  margin-bottom: 30px;
  > * {
    color: #f2f5f2;
  }
`;

const StyledAnswear = styled(ReactMarkdown)`
  background-color: #73a6ad;
  padding: 10px 0;
  color: #fff;
  border-radius: 3px;
  border-bottom: 2px #1890ff solid;
  text-align: center;
  margin-bottom: 30px;
  > * {
    color: #f2f5f2;
  }
  &:hover {
    background-color: #9ea93f;
  }
`;
const StyledAvatar = styled(Gravatar)`
  filter: blur(3px);
  border: 2px red dashed;
  border-radius: 3px;
`;
const StyledName = styled.div`
  text-decoration: line-through;
  color: red;
`

class DeathMatch extends PureComponent {
  constructor() {
    super();
    socket.on('welcome', ({user}) => {
      this.props.addTeamUser(user);
      // this.openNotificationUserCome(user);

    })

    socket.on('user_kicked', ({user}) => {
      // this.props.addTeamUser(user);
      // this.openNotificationUserKicked(user);
      this.props.kickTeamUser(user);
    })
  }
  state = {
    question: null,
  }

  componentDidMount() {
    this.setState({ question: this.getRandomQuestion()});
  }

  getRandomQuestion = () => {
    const questionList = this.props.course;
    const numOfItem = questionList.length;
    const choosenQuestion = (numOfItem * Math.random() * 100) / 100;
    return questionList[Math.ceil(choosenQuestion) -1];
  };
  openNotificationUserCome = (user) => {
    notification.open({
      message: (<div>{user} logged to application!!</div>),
    });
  }

  openNotificationUserKicked = () => {
    notification.open({
      message: (<div>You loose!!</div>),
    });
  }

  openNotification = () => {
    notification.open({
      message: (<div style={{color: '#60712f', fontSize: '20px'}}>You get a prize !!</div>),
      description: (<div style={{display: 'flex', justifyContent: 'center'}}><img src={helmet}/></div>),
    });
  }

  onAnswClick = (isCorrect) => {
    if(isCorrect) {
      this.props.setUserProfile({ exp: this.props.profile.exp + 2})
      this.openNotification();
      this.setState({question: this.getRandomQuestion()})
    } else {
      this.setState({question: this.getRandomQuestion()})
      this.openNotificationUserKicked()
      socket.emit('user_kicked', this.props.profile.name);
      this.props.kickTeamUser(this.props.profile.name);
    }
  };

  renderAnswearList = (ansList) => {
    return ansList.map(({ content, correct }) => {
      return (
        <div onClick={() => this.onAnswClick(correct)}><StyledAnswear source={content}>
        </StyledAnswear></div>
      )
    })
  }

  renderQuiz = () => {
    if(this.state.question) {
      return (
        <Fragment>
          <StyledQuestion source={this.state.question.question}></StyledQuestion>
          <div>{this.renderAnswearList(this.state.question.answear)}</div>
        </Fragment>
      );
    } else return null;
  }

  renderTeamMates = () => {
    const { team } = this.props;
    return team.map(({ name, email, kicked }) => {

      return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '10px'}}>
          <div style={{display: 'flex',justifyContent: 'center'}}>{kicked?<StyledAvatar email={email} />:<Gravatar email={email} />}</div>
          {kicked?<StyledName>{name}</StyledName>:<div>{name}</div>}
        </div>
      )
    })
  }
  render() {
    return (
      <div>
        <div>DeatchMatch</div>
        <div style={{display: 'flex'}}>{this.renderTeamMates()}</div>
        <div>{this.props.profile.name ? this.renderQuiz(): null}</div>
      </div>
    );
  }
}

export default connect(({team, course, profile}) => ({team, course, profile}), ({ setUserProfile, addTeamUser, kickTeamUser }))(DeathMatch);
