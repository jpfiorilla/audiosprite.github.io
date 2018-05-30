import * as React from 'react';
import { SocialIcon } from 'react-social-icons';
import {
  facebookPage,
  twitterHandle,
  instagramHandle,
  imgDir,
  soundcloudHandle,
  bandcampHandle
} from '../data';

export default class Social extends React.Component {
  render() {
    return (
      <div className="social">
        {twitterHandle && (
          <a target="__blank" link={`https://www.twitter.com/${twitterHandle}`}>
            <img src={`${imgDir}twitter.svg`} alt="tw" />
          </a>
        )}
        {instagramHandle && (
          <a
            target="__blank"
            link={`https://www.instagram.com/${instagramHandle}`}
          >
            <img src={`${imgDir}instagram.svg`} alt="in" />
          </a>
        )}
        {soundcloudHandle && (
          <a
            target="__blank"
            link={`https://www.soundcloud.com/${soundcloudHandle}`}
          >
            <img src={`${imgDir}soundcloud.svg`} alt="sc" />
          </a>
        )}
        {bandcampHandle && (
          <a target="__blank" link={`https://${bandcampHandle}.bandcamp.com`}>
            <img src={`${imgDir}bandcamp.svg`} alt="bc" />
          </a>
        )}
        {/* {facebookPage ? (
          <SocialIcon
            color="transparent"
            url={
              facebookPage.includes('.com')
                ? facebookPage
                : `https://www.facebook.com/${facebookPage.replace(/\W/g, '')}`
            }
          />
        ) : null}
        {twitterHandle ? (
          <SocialIcon
            color="transparent"
            url={
              twitterHandle.includes('.com')
                ? twitterHandle
                : `https://twitter.com/${twitterHandle.replace(/\W/g, '')}`
            }
          />
        ) : null}
        {instagramHandle ? (
          <SocialIcon
            color="transparent"
            url={
              instagramHandle.includes('.com')
                ? instagramHandle
                : `https://instagram.com/${twitterHandle.replace(/\W/g, '')}`
            }
          />
        ) : null} */}
      </div>
    );
  }
}
