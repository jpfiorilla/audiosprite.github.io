import * as React from 'react';
import { Video, Gifs, Logos } from '.';
import { SEO } from '../';
import { imgDir } from '../../data';

const GameNav = ({ links }) => (
  <section className="gameNav">
    <div className="title">Links</div>
    <div className="links">
      {links.map(link => (
        <a href={link.link} key={link.link} className="link">
          {link.text}
        </a>
      ))}
    </div>
  </section>
);

export default class Game extends React.Component {
  render() {
    const {
      youtubeLink,
      gameCopy,
      gifs,
      logos,
      ratingImg,
      img,
      heroImg,
      storeLinks = [],
      links = [],
      description,
      name,
    } = this.props;
    return (
      <div id="GamePage">
        <SEO title={`${name}| OrcPunk Games`} description={description} />
        <section id="Hero">
          <img src={imgDir + (heroImg || img)} alt="" />
        </section>
        <div className="storeLinks">
          {storeLinks.map(link => (
            <a key={link.link} href={link.link}>
              <img
                src={`/build/img/${link.platform}-store.svg`}
                alt={link.platform}
              />
            </a>
          ))}
        </div>
        <GameNav links={links} />
        <Video youtubeLink={youtubeLink} gameCopy={gameCopy} />
        <Gifs gifs={gifs} />
        <Logos logos={logos} rating={ratingImg} />
        {ratingImg ? <img src={ratingImg} key={ratingImg} alt="" /> : null}
        <GameNav links={links} />
      </div>
    );
  }
}
