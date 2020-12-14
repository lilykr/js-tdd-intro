const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('rectangle', () => {
  it('is a square', () => {
    const rectangle = new Rectangle(5, 5);
    assert.strictEqual(rectangle.isSquare(), true);
  })

  it('is a not square', () => {
    const rectangle = new Rectangle(5, 6);
    assert.strictEqual(rectangle.isSquare(), false);
  })

  it('gives the area', () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getArea(), 91)
  })

  it('gives the perimeter', () => {
    const rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getPerimeter(), 40)
  })
})

