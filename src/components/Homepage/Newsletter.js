import * as React from 'react';
import Airtable from 'airtable';
import { connect } from 'react-redux';
import { sendNewsletter } from '../../redux/actions/actions';
import { airtable } from '../../data';

const base = new Airtable({ apiKey: airtable }).base('appgDopuvXbayMxX3');

const iframeSyle = {
  // background: colors.white,
  //   background: '#fafafa',
};
Object.keys(iframeSyle).forEach((prop) => {
  iframeSyle[prop] = iframeSyle[`${prop} !important`];
});

const iFrame =
  // '/build/html/newsletterIframe.htm' ||
  'https://airtable.com/embed/shrfodwIi3SQS91fr?backgroundColor=pink';

export default class Newsletter extends React.Component {
  render() {
    return (
      <section id="Newsletter">
        {/* <div className="text">
          <div className="title">Newsletter Signup</div>
          <p className="description">lorem ipsum</p>
        </div>
        <div className="subscribeOuter">
          <div className="subscribe">Subscribe</div>
          <input />
        </div> */}
        <iframe
          className="airtable-embed"
          src={iFrame}
          frameBorder="0"
          // onmousewheel=""
          width="100%"
          height="533"
          style={{ background: '#fafafa' }}
        />
      </section>
    );
  }
}

// class Newsletter extends React.Component {
//   state = {
//     email: '',
//   };
//   handleType = e => this.setState({ email: e.target.value });
//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.email) {
//       console.log(this.state.email);
//       return this.props.sendNewsletter(this.state.email);
//     }
//   };
//   render() {
//     const { email } = this.state;
//     console.log(this.props);
//     return (
//       <section id="Newsletter">
//         <form onSubmit={this.handleSubmit}>
//           <input placeholder="email" value={email} onChange={this.handleType} />
//         </form>
//       </section>
//     );
//   }
// }

// export default connect(null, { sendNewsletter })(Newsletter);
