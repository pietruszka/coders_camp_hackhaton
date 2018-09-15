import React, { PureComponent, Fragment } from 'react';
import connect from 'react-redux/es/connect/connect';
import { setUserProfile } from '../reducers/rootReducer';
import { Button, notification } from 'antd';
import helmet from './img/images.png';
import { addQuestProgress } from '../reducers/missionList';
import styled from 'styled-components';
import { checkReward } from '../actions';
import { killQuest } from '../reducers/missionList';
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
  };

  componentDidMount() {
    this.setState({ question: this.getRandomQuestion() });
  }

  getRandomQuestion = () => {
    const questionList = this.props.course;
    const numOfItem = questionList.length;
    const choosenQuestion = (numOfItem * Math.random() * 100) / 100;
    return questionList[Math.ceil(choosenQuestion) - 1];
  };
  checkQuest() {
    this.props.addQuestProgress();
    this.props.checkReward(this.props.mission);
    this.props.killQuest(this.props.mission);
  }
  openNotification = () => {
    this.checkQuest(); //Check if quest should gain progress
    notification.open({
      message: <div style={{ color: '#60712f', fontSize: '20px' }}>You get a prize !!</div>,
      description: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={helmet} />
        </div>
      ),
    });
  };

  onAnswClick = isCorrect => {
    if (isCorrect) {
      this.props.setUserProfile({ exp: this.props.profile.exp + 2 });
      this.openNotification();
      this.setState({ question: this.getRandomQuestion() });
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
    //  console.log(this.props.course);
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
  ({ course, profile, mission }) => ({ course, profile, mission }),
  { setUserProfile, addQuestProgress, checkReward, killQuest },
)(Courses);
