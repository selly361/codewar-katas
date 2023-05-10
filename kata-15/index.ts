function toWeirdCase(string: string){
    let array = string.split(" ")
   array = array.map(l => l.split("").map((a, i) => i % 2 == 0 ? a.toUpperCase() : a.toLowerCase()).join(""))

    return array.join(" ")
}