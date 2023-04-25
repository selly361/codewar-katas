function count(string: string) {
    const result = {};
  
    for(let letter of string){
      result[letter] = (result[letter] || 0) + 1
    }
  
    return result;
  }
  
  
