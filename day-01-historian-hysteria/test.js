const assert = require('node:assert');

const part1 = require('./part1');
const part2 = require('./part2');

describe('Day 1: Historian Hysteria', () => {
  it('should find total distance between lists', () => {
    const input =
      `3   4
       4   3
       2   5
       1   3
       3   9
       3   3`;

    assert.strictEqual(part1(input), 11);
  });

  describe('Part Two', () => {
    it('should find similarity score of lists', () => {
      const input =
        `3   4
         4   3
         2   5
         1   3
         3   9
         3   3`;

      assert.strictEqual(part2(input), 31);
    });
  });
});
