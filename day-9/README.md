# IndexOf Array in Array

## RANK: 6 KYU

### Description

JavaScript's indexOf does not work with arrays as input. This is because `[1,2] === [1,2]` will return false in JavaScript. Many other languages have similar quirks.

However, sometimes it is useful to search for an Array. Write a function that looks for an array within a two-dimensional array and returns the index of the first matching element. If there is no match, your function should return `-1`.

#### Examples:

```ts
var arrayToSearch = [
  [1, 2],
  [3, 4],
  [5, 6],
];

var query = [1, 2]; // => 0

query = [5, 6]; // => 2

query = [9, 2]; // => -1
```

```ts
var arrayToSearch = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8, 9],
]; // => throw Error
arrayToSearch = [1, 2, 3, 4, 5, 6]; // => throw Error
arrayToSearch = [
  [1, 2],
  [3, 4],
  [5, 6],
]; // => valid input
var query = [1, 2]; // => valid input
query = 5; // => throw Error
query = [9, 2, 1]; // => throw Error
```
