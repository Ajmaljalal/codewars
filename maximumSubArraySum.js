var maxSequence = function(arr){
  if(!arr.length) return 0
  
  if(!arr.join('').includes('-')) {
    const sum = arr.reduce((result, number) => result + number, 0)
    return sum
  }
}