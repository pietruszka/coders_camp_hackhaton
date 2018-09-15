import React, { PureComponent, Fragment } from 'react';
import connect from 'react-redux/es/connect/connect';
import { setUserProfile } from '../reducers/rootReducer';
import { Button, notification } from 'antd';
import helmet from './img/images.png';
import { addQuestProgress } from '../reducers/missionList';
import styled from 'styled-components';
const ReactMarkdown = require('react-markdown');

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
`;

class Courses extends PureComponent {
  state = {
    question: null,
  }
  monster = {
    damage: 2,
    exp: 2,
    HP: 10,
  }
  componentDidMount() {
    this.setState({ question: this.getRandomQuestion() });
  }

  getRandomQuestion = () => {
    const questionList = this.props.course;
    const numOfItem = questionList.length;
    const choosenQuestion = (numOfItem * Math.random() * 100) / 100;
    return questionList[Math.ceil(choosenQuestion) - 1];
  };

  openNotification = () => {
    this.props.addQuestProgress(); //Check if quest should gain progress
    notification.open({
      message: (<div style={{ color: '#60712f', fontSize: '18px' }}>Dobrze!! Dostajesz {this.monster.exp + Math.floor(this.props.profile.Intelligence / 10)} Doświadczenia <br /> Zadałeś {this.props.profile.Strength} obrażeń</div>),
      description: (<div style={{ display: 'flex', justifyContent: 'center' }}><img src={helmet} /></div>),
    });
  }
  openNotificationerror = () => {
    notification.open({
      message: (<div style={{ color: '#60712f', fontSize: '18px' }}>Zła odpowiedź, tracisz {this.monster.damage} HP !!</div>),
      // description: (<div style={{ display: 'flex', justifyContent: 'center' }}><img src={helmet} /></div>),
    });
  }
  openNotificationdeath = () => {
    notification.open({
      message: (<div style={{ color: '#60712f', fontSize: '18px' }}>Umarłeś!! Tracisz {Math.floor(this.props.profile.EXP / 2)} Doświadczenia </div>),
      // description: (<div style={{ display: 'flex', justifyContent: 'center' }}><img src={helmet} /></div>),
    });
  }
  openNotificationdodge = () => {
    notification.open({
      message: (<div style={{ color: '#60712f', fontSize: '18px' }}>Zła odpowiedź ale unikasz obrażeń!</div>),
      // description: (<div style={{ display: 'flex', justifyContent: 'center' }}><img src={helmet} /></div>),
    });
  }
  openNotificationlvlup = () => {
    notification.open({
      message: (<div style={{ color: '#60712f', fontSize: '18px' }}>Gratulacje! Kolejny poziom</div>),
      // description: (<div style={{ display: 'flex', justifyContent: 'center' }}><img src={helmet} /></div>),
    });
  }
  onAnswClick = (isCorrect) => {
    if (isCorrect) {
      this.props.setUserProfile({ EXP: this.props.profile.EXP + this.monster.exp })
      this.openNotification();
      if (this.props.profile.EXP >= this.props.profile.EXPneeded) {
        this.props.setUserProfile({ EXP: 0 });
        this.props.setUserProfile({ EXPneeded: (this.props.profile.EXPneeded + 5) });
        this.props.setUserProfile({ Level: (this.props.profile.Level + 1) });
        this.props.setUserProfile({ Points: (this.props.profile.Points + 5) });
        this.openNotificationlvlup();
      }
      this.setState({ question: this.getRandomQuestion() })
    } else if ((Math.random() + this.props.profile.Agility / 20) > 0.4) {
      this.openNotificationdodge();
      this.setState({ question: this.getRandomQuestion() })
    }
    else {
      // console.log(this.props.profile.HP);
      this.props.setUserProfile({ HP: this.props.profile.HP - this.monster.damage });
      this.openNotificationerror();
      // console.log(this.props.profile.HP);
      if (this.props.profile.HP <= 0) {
        // console.log(this.props.profile.HP);
        this.props.setUserProfile({ HP: this.props.profile.HPmax });
        this.openNotificationdeath();
      }
      this.setState({ question: this.getRandomQuestion() })
    }
  };

  renderAnswearList = ansList => {
    return ansList.map(({ content, correct }) => {
      return (
        <div onClick={() => this.onAnswClick(correct)}>
          <StyledAnswear source={content} />
        </div>
      );
    });
  };
  render() {
    // console.log(this.props.course) 
    // const { question, answear } = this.getRandomQuestion();
    if (this.state.question) {
      return (
        <Fragment>
          <StyledQuestion source={this.state.question.question} />
          <div>{this.renderAnswearList(this.state.question.answear)}</div>
        </Fragment>
      );
    } else return null;
  }
}

export default connect(
  ({ course, profile }) => ({ course, profile }),
  { setUserProfile, addQuestProgress },
)(Courses);
