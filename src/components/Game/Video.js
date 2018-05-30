import * as React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';

const Video = ({ youtubeLink, gameCopy }) => (
  <section className="videoOuter">
    <ResponsiveEmbed
      src={youtubeLink || 'https://www.youtube.com/embed/fLoGNWi1pOM?rel=0'}
      allowFullScreen
    />
    <p className="gameCopy">{gameCopy}</p>
  </section>
);

export default Video;
