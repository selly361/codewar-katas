function solution(string: string) {
    let newString = ""
    
    for(let s of string){
      if(s.toUpperCase() === s){
        newString += " " + s;
      }
      
      else {
        newString += s;
      }
    }
  
  return newString;
}