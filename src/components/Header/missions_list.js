import React, { Component } from 'react';
import Mission from './missionElement';
import { List } from 'antd';
import { connect } from 'react-redux';
import QuestList from '../../reducers/QuestList';
// import { newQuestList } from '../../Actions/index';
import { addNewQuest } from './../../reducers/missionList';
let exampleMission = {
  title: 'Kill a dragon',
  description: 'Dragon has attacked our villige! Please help! Complete 20 questions',
  progress: 0,
  goal: 20,
  type: 'ANWSER_QUEST',
  id: 0,
};

class MissionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      missionsToTake: [exampleMission, exampleMission, exampleMission], // download missions once a day.
      missionsTaken: [],
    }; // download missions from backend
    // this.HandleTakeMission=this.HandleTakeMission.bind(this);
    //missionToTake.filter(({ id }) => id !== idElemDoUsuniecia)
  }

  handleTakeMission = (mission, toTake) => {
    if (toTake === true && this.props.mission.length < 3) {
      let newState = this.state.missionsTaken; // new array
      //let newState = this.state.missionsTaken;
      newState.push(mission);
      this.setState({ missionsTaken: newState });
      this.deleteMissionFromToTakeList(mission, this.state.missionsToTake);
      //redux
      console.log(this.state.missionsTaken);
      this.props.addNewQuest(mission);
    }
  };
  deleteMissionFromToTakeList(mission, state) {
    let missionIndex = state.indexOf(mission);
    let tempState = state.filter((item, index) => {
      return missionIndex != index;
    });
    this.setState({ missionsToTake: tempState });
  }
  renderMissionList(state, toTake) {
    if (state.length == 0) return <div>Brak Misji</div>;
    else
      return state.map((mission, index) => {
        //Show all misions
        // console.log(index);
        return (
          <li onClick={() => this.handleTakeMission(mission, toTake)}>
            <Mission
              title={mission.title}
              description={mission.description}
              progress={mission.progress}
              goal={mission.goal}
              id={mission.id}
              key={index}
            />
          </li>
        );
      });
  }

  render() {
    // this.renderMissionList(this.props.mission);
    return (
      <div>
        {QuestList[0].title}
        <List>
          <h3>Twoje aktyalne misje:</h3>
          <ul>{this.renderMissionList(this.props.mission, true)}</ul>
          <h3> Misje do wzięcia: </h3>
          <ul>{this.renderMissionList(this.state.missionsToTake, true)}</ul>
        </List>
      </div>
    );
  }
}

//export default MissionsList;
function mapStateToProps({ mission }) {
  return { mission };
}

export default connect(
  mapStateToProps,
  { addNewQuest },
)(MissionsList);
