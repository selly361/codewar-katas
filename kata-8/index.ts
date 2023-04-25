function arrayDiff(a: number[], b: number[]) {
  
    for(let ele of b){
      a = a.filter(item => item !== ele)
    }
  
    return a;
  }