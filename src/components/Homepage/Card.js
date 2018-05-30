import * as React from 'react';
import { Link } from 'react-router-dom';
import { imgDir } from '../../data';
import { serialize } from '../../utils';

const Card = ({
  img,
  name,
  description,
  storeLinks = [],
  releaseDate = '',
  className = '',
  twitter,
  jobTitle,
}) => (
  <div className={`card ${className}`}>
    {img ? (
      jobTitle ? (
        <a href={`http://www.twitter.com/${twitter}`} target="__blank">
          <div
            style={{ backgroundImage: `url(${imgDir + img})` }}
            className="cardImg"
          />
        </a>
      ) : (
        <Link to={`/games/${serialize(name)}`}>
          <div
            style={{ backgroundImage: `url(${imgDir + img})` }}
            className="cardImg"
          />
        </Link>
      )
    ) : null}
        {storeLinks.length ? (
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
    ) : null}
    {description ? <p>{description}</p> : null}
     {jobTitle ? (
      <React.Fragment>
        <div className="name">{name}</div>
        <div className="jobTitle">{jobTitle}</div>
      </React.Fragment>
    ) : null}
    {storeLinks.length || releaseDate ? (
      <div className="bottom">
        <div className="platforms">
          {storeLinks.map(link => (
            <a key={link.link} href={link.link}>
              <img
                src={`/build/img/${link.platform}.svg`}
                alt={link.platform}
              />
            </a>
          ))}
        </div>
        {releaseDate}
      </div>
    ) : null}
    {twitter ? (
      <div className="twitter">
        <a
          className="twitter"
          target="__blank"
          href={`http://www.twitter.com/${twitter}`}
        >{`@${twitter}`}</a>
      </div>
    ) : null}
  </div>
);

export default Card;
