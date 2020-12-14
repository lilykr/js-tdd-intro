// capitalizeFirstLetters.js
const assert = require('assert');

function capitalizeFirstLetters(string) {
  if (string.length > 0) {
    const arr = string.split(' ');
    const newArr = arr.map(e => e[0].toUpperCase() + e.slice(1));
    return newArr.join(' ')
  }

  else return '';

}

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirst transforms javaScript correctly
assert.strictEqual(capitalizeFirstLetters('i am bold'), 'I Am Bold');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(''), '');
