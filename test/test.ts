// Could do with proper tests...

const eases = require('../src');
import * as assert from "assert";

const outsideRange = [
  'elasticIn', 'elasticOut', 'elasticInOut',
  'backIn', 'backOut', 'backInOut',
  'bounceIn', 'bounceOut', 'bounceInOut',
];

describe('@gamestdio/easing', () => {
  it('eases return number between 0 and 1', () => {
    for (var k in eases) {
      var f = eases[k]
      if (outsideRange.indexOf(k) === -1) {
        assert.equal(f(1), 1, k)
        assert.equal(f(0), 0, k)
      }
    }
  });
});
