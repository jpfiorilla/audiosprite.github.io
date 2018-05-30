import * as React from 'react';
import { Card } from '.';
import { team } from '../../data';

export default class TheTeam extends React.Component {
  render() {
    return (
      <section id="TheTeam">
        <div className="title">The Team</div>
        <div className="members">
          {team.map(member => (
            <Card key={member.name || member.img} {...member} />
          ))}
        </div>
      </section>
    );
  }
}
