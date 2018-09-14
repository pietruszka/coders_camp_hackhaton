import React, {Component} from 'react';
import Mission from './mission';

let exampleMission={
  title:"Kill a dragon",
  description:"Dragon has attacked our villige! Please help! Complete 20 questions",
  progress:0,
  goal:20
}

class MissionsList extends Component{
    constructor(props){
    super(props);
    this.state={missionsToTake:[exampleMission,exampleMission,exampleMission], // download missions once a day.
                missionsTaken:[exampleMission,exampleMission,exampleMission]} // download missions from backend
  }
  render(){
    return <div>
     <Mission title={this.state.missionsTaken[0].title}
        description={this.state.missionsTaken[0].description}
        progress={this.state.missionsTaken[0].progress}
        goal={this.state.missionsTaken[0].goal}
     />
      </div>;
  }

}

export default MissionsList;
