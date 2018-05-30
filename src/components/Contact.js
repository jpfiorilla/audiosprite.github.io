import * as React from 'react';
import Airtable from 'airtable';
import { airtable } from '../data';

const base = new Airtable({ apiKey: airtable }).base('appgDopuvXbayMxX3');

export default function Contact() {
  return (
    <section id="Contact">
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js" />
      <iframe
        className="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrT8h6516Gz9YLyt?backgroundColor=pink"
        frameBorder="0"
        // onmousewheel=""
        width="100%"
        height="1118"
        style={{ background: '#fafafa', border: '1px solid #ccc' }}
      />
    </section>
  );
}

// export default class Contact extends React.Component {
//   state = {
//     email: ''
//   };
//   handleType = e => this.setState({ email: e.target.value });
//   handleSubmit = () => {
//     if (this.state.email) {
//       console.log(this.state.email);
//     }
//   };
//   render() {
//     const { email } = this.state;
//     return (
//       <section id="Contact">
//         <form onSubmit={this.handleSubmit}>
//           <input placeholder="email" value={email} onChange={this.handleType} />
//         </form>
//       </section>
//     );
//   }
// }
