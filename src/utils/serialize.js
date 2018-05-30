import { replaceAll } from '.';

const serialize = (string) => {
  let newString = string.replace(/ +(?= )/g, '');
  newString = replaceAll(newString, '^[a-zA-Z0-9-_]+$', '');
  newString = replaceAll(newString, ' ', '-');
  return newString.toLowerCase();
};

export default serialize;
