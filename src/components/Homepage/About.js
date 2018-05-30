import * as React from 'react';
import { about } from '../../data';

export default class About extends React.Component {
  render() {
    return (
      <section id="About">
        <div className="title">About Us</div>
        <p target="__blank">
          {Array.isArray(about) ? about.join('\n') : about}
        </p>
      </section>
    );
  }
}
