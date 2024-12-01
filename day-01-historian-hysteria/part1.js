module.exports = (input) => {
  const [left, right] = input
    .split('\n')
    .reduce(([left, right], line) => {
      const [a, b] = line.trim().split(/\s{3}/);

      return [[...left, +a], [...right, +b]];
    }, [[], []])
    .map((lists) => [...lists].sort());

  let total = 0;

  while (left.length) {
    const a = left.pop();
    const b = right.pop();

    total += Math.abs(a - b);
  }

  return total;
};
