const findOutlier = (ints: number[]) =>
  ints.filter((x) => x % 2 === 0).length === 1
    ? ints.find((x) => x % 2 === 0)
    : ints.find((x) => x % 2 !== 0);
