import React, {Component} from 'react';
import Mission from './mission';

let exampleMission={
  title:"Kill a dragon",
  description:"Dragon has attacked our villige! Please help! Complete 20 questions",
  progress:0,
  goal:20,
  id:0
}

class MissionsList extends Component{
    constructor(props){
    super(props);
    this.state={missionsToTake:[exampleMission,exampleMission,exampleMission], // download missions once a day.
                missionsTaken:[exampleMission,exampleMission,exampleMission]} // download missions from backend
  }
  renderMissionList(state){

    return state.map(
      (mission) => {
        console.log(mission);
        return <li><Mission title={mission.title} description={mission.description} progress={mission.progress} goal={mission.goal}/></li>
      }
    )
  }
  render(){
    this.renderMissionList(this.state.missionsTaken);
    return <div>
        Twoje aktyalne misje:
        <ul >{this.renderMissionList(this.state.missionsTaken)}</ul>
        Misje do wzięcia:
        <ul>{this.renderMissionList(this.state.missionsToTake)}</ul>
      </div>;
  }

}

export default MissionsList;
