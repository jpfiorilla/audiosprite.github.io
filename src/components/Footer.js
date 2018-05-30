import * as React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Social from './Social';
import { address, gmapsLink, email } from '../data';

export default class Footer extends React.Component {
  state = {
    copied: false,
  };
  handleCopy = () => {
    this.setState({
      copied: true,
    });
    setTimeout(() => this.setState({ copied: false }), 3000);
  };
  render() {
    return (
      <div id="Footer">
        <div className="footerInner">
          <div className="meatspace">
            <div className="title">Meatspace</div>
            <a target="__blank" href={gmapsLink}>
              {Array.isArray(address)
                ? address.map(line => <div key={line}>{line}</div>)
                : address}
            </a>
          </div>
          <div className="cyberspace">
            <div className="title">Cyberspace</div>
            <CopyToClipboard
              onCopy={this.handleCopy}
              text={email}
              className="email"
            >
              <div>
                <span className="emailSpan">{email}</span>
                {this.state.copied ? (
                  <span className="copied">- Copied!</span>
                ) : null}
              </div>
            </CopyToClipboard>
            <Social />
          </div>
        </div>
      </div>
    );
  }
}
