function duplicateEncode(word: string) {
  word = word.toLowerCase();
  return word
    .split('')
    .map((char, i, arr) => arr.indexOf(char) === arr.lastIndexOf(char) ? '(' : ')')
    .join('');
}




