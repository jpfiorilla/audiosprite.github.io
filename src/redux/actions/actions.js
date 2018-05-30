export const SEND_NEWSLETTER = 'SEND_NEWSLETTER';

export function sendNewsletter(email) {
  return {
    type: SEND_NEWSLETTER,
    payload: {
      email,
    },
  };
}

export default { sendNewsletter };
