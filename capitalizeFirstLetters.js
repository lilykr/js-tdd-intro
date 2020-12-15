// capitalizeFirstLetters.js
const assert = require('assert');

function capitalizeFirstLetters(string) {
  return string.length > 0 ?
  string.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
  : '';
}

module.exports = capitalizeFirstLetters;
