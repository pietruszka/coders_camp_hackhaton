import React, { PureComponent, Fragment } from 'react';
import connect from 'react-redux/es/connect/connect';
import { setUserProfile } from '../reducers/rootReducer';
import { Button, notification } from 'antd';
import helmet from './img/images.png';

class Courses extends PureComponent {
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
    }
  };

  renderAnswearList = (ansList) => {
    return ansList.map(({ content, correct }) => {
      return (
        <div onClick={() => this.onAnswClick(correct)}>
          {content}
        </div>
      )
    })
  }
  render() {
    console.log(this.props.course)
    // const { question, answear } = this.getRandomQuestion();
    if(this.state.question) {
      return (
        <Fragment>
          <div>{this.state.question.question}</div>
          <div>{this.renderAnswearList(this.state.question.answear)}</div>
        </Fragment>
      );
    } else return null;

  }
}

export default connect(({course, profile}) => ({course, profile}), ({ setUserProfile }))(Courses);
