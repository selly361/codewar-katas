function sortEmotions(arr: string[], asc: boolean){
  
    const order = {
      ":D": 0,
      ":)": 1,
      ":|": 2,
      ":(": 3,
      "T_T": 4
    }
    
    
    return arr.sort((a, b) => asc ? order[a] - order[b] : order[b] - order[a])
  }