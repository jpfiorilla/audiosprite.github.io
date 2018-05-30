import Airtable from 'airtable';
import { SEND_NEWSLETTER } from '../actions/actions';
import { airtable } from '../../data';

const base = new Airtable({ apiKey: airtable }).base('appgDopuvXbayMxX3');

const initialState = {
  sampleState: null,
};

const sampleReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SEND_NEWSLETTER:
      base('Newsletter Signup').create(action.payload, (err, record) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(record.getId());
      });
      return state;
    default:
      return state;
  }
};

export default sampleReducer;
