function bubblesortOnce(array: number[]) {
    const copy = [...array];
    
    
    for(let i = 0; i < copy.length; i++){
      if(copy[i] > copy[i + 1]) {
        const item1 = copy[i]
        copy[i] = copy[i + 1]
        copy[i + 1] = item1
      }
    }
    
    return copy
  }