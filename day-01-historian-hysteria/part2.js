module.exports = (input) => {
  const [left, right] = input
    .split('\n')
    .reduce(([left, right], line) => {
      const [a, b] = line.trim().split(/\s{3}/);

      left.push(a);

      if (!right[b]) {
        right[b] = 0;
      }

      right[b]++;

      return [left, right];
    }, [[], {}]);

  return left.reduce((sum, a) => sum + (a * right[a] || 0), 0);
};
