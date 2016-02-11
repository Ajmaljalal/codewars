var maxSequence = function (arr) {
    let maxSum = 0
    if (!arr.length) return maxSum

    if (!arr.join('').includes('-')) {
        maxSum = arr.reduce((result, number) => result + number, 0)
        return maxSum
    }

    arr.forEach(number => {
        if (!number.toString().includes('-')) {
            maxSum = 0
        }
    })



    return maxSum


}