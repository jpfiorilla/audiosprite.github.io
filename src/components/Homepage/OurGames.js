import * as React from 'react';
import { Card } from '.';
import { games } from '../../data';

export default class OurGames extends React.Component {
  render() {
    return (
      <section id="Work">
        <div className="title">Our Work</div>
        <div className="games">
          {games.map(game => <Card key={game.name || game.img} {...game} />)}
        </div>
      </section>
    );
  }
}
