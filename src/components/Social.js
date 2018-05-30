import * as React from 'react';
import { SocialIcon } from 'react-social-icons';
import { facebookPage, twitterHandle, instagramHandle } from '../data';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="social">
        {facebookPage ? (
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
        ) : null}
      </div>
    );
  }
}
