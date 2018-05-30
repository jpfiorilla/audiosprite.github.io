import * as React from 'react';

import { imgDir } from '../data';

export default class Video extends React.Component {
  render() {
    return (
      <video autoPlay muted loop id="Video">
        <source src={`${imgDir}goldSkulltula.mov`} type="video/mp4" />
      </video>
    );
  }
}
