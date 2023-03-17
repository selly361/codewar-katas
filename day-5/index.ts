function count(string: string) {
    const result = {};
  
    for(let s of string){
      result[s] = (result[s] || 0) + 1
    }
  
    return result;
  }
  
  