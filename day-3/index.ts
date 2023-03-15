function countSmileys(arr: string[]) {
  const eyes = [":", ";"];
  const noses = ["-", "~"];
  const mouths = [")", "D"];
  let count = 0;

  arr.forEach((str) => {
    const chars = str.split("");

    if (
      chars.length === 2 &&
      eyes.includes(chars[0]) &&
      mouths.includes(chars[1])
    ) {
      count++;
    } else if (
      chars.length === 3 &&
      eyes.includes(chars[0]) &&
      noses.includes(chars[1]) &&
      mouths.includes(chars[2])
    ) {
      count++;
    }
  });

  return count;
}
