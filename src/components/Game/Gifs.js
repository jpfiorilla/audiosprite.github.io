import * as React from 'react';

const gifsDir = '/build/gifs/';

const Gifs = ({ gifs = [] }) => (
  <section className="gifs">
    {gifs.map(gif => <img key={gif} src={`${gifsDir + gif}.gif`} alt="" />)}
  </section>
);

export default Gifs;
