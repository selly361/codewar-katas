function findOdd(array: number[]) {
  const result = array.reduce((prev, curr) => {
    prev[curr] = (prev[curr] || 0) + 1;
    return prev;
  }, {});

  for (let key in result) {
    if (result[key] % 2) {
      return +key
    }
  }
}
