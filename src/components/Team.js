import React, { PureComponent } from 'react';
import connect from 'react-redux/es/connect/connect';
import { setUserProfile } from '../reducers/rootReducer';
import { List, Avatar } from 'antd';
import Gravatar from 'react-gravatar'

class Team extends PureComponent {

  renderTeamMates = () => {
    const { team } = this.props;
    return team.map(({name}) => {
      return (
        <div>{name}</div>
      )
    })
  };

  render() {
    return (
      <div>
        <div>Team</div>
        <List
          itemLayout="horizontal"
          dataSource={this.props.team}
          renderItem={({name, email}) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Gravatar email={email} />}
                title={<a href="https://ant.design">{name}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}

export default connect(({team}) => ({team}), ({ setUserProfile }))(Team);
