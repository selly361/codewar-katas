function findUniq(arr: number[]) {
    const result = {};
  
    for(let number of arr){
      result[number] = (result[number] || 0) + 1
    }

    
    for(let key in result) {
        if(result[key] == 1) return +key
    }
  
  }
  
  
const result = findUniq([1, 1, 0, 1]);

// returns 0



