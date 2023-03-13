const solution = (length: number) => {
  const multiples = 
  Array.from({ length }, (_, i) => i)
  .filter((n) => (n % 3 == 0 || n % 5 == 0) && n !== 0);

  return multiples.reduce((prev, curr) => prev += curr, 0)
};
