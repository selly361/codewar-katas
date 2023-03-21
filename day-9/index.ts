const searchArray = (arrayToSearch, query) => {
    if (!arrayToSearch.every((arr) => arr.length === 2)) {
      throw new Error(
        "Invalid input: each sub-array in the two-dimensional array should be of length two"
      );
    }
    if (!Array.isArray(query) || query.length !== 2) {
      throw new Error("Invalid input: query should be an array of length two");
    }
    return arrayToSearch.findIndex((arr) =>
      arr.every((ele, index) => ele === query[index])
    );
  };