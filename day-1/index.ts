const solution = (length: number) => Array.from({ length }, (_, i) => i).filter((n) => (n % 3 == 0 || n % 5 == 0)).reduce((prev, curr) => prev += curr, 0)
