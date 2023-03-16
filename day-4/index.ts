/*
Original function:

function isIsogram(str){
    const result = str.split("").every((letter, i, arr) => {
      arr.splice(i, 1)
      

      if(arr.includes(letter)) return false
      else return true
    })
    
    return result
}


*/


const isIsogram = (str: string) => str.toLowerCase().split("").every((letter, i, arr) => arr.indexOf(letter) === i);