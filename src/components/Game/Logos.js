import * as React from 'react';

const Logos = ({ logos = [] }) => (
  <section className="logos">
    {logos.map(logo => <img key={logo} src={logo} alt="" />)}
  </section>
);

export default Logos;
