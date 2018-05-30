import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import Social from './Social';
import { imgDir, logoFull } from '../data';

const anchors = ['Work', 'About', 'Contact'];

export default function Header() {
  return (
    <div id="Header">
      <div className="headerInner">
        <div className="name">John Fio</div>
        {/* <div className="headerTop">
          <Link to="/" className="logoFull">
            <img src={imgDir + logoFull} alt="Orc Punk" />
          </Link>
          <Social />
        </div>
      </div>
      <div className="headerBottom">
        {anchors.map(anchor => (
          <Scroll.Link key={anchor} to={anchor} smooth duration={500}>
            {anchor}
          </Scroll.Link>
        ))} */}
      </div>
      <div className="headerBorder" />
      {/* <img src={`${imgDir}squiggle.svg`} /> */}
    </div>
  );
}
