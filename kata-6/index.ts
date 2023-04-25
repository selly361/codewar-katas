const XO = ([...string]: string[]) => {

  const xs = string.filter((x) => x.toLowerCase() == "x").length;
  const os = string.filter((x) => x.toLowerCase() == "o").length;

  return xs == os;
};
