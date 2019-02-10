function evaluateNumberWithOperator(number, numberWithOperator) {
    return eval(`${number} ${numberWithOperator}`)
}

function zero(numberWitOperator) {
    if (numberWitOperator) {
        return Math.floor(evaluateNumberWithOperator(0, numberWitOperator))
    }
    return 0
}

function one(numberWitOperator) {
    if (numberWitOperator) {
        return Math.floor(evaluateNumberWithOperator(1, numberWitOperator))
    }
    return 1
}
function two(numberWitOperator) {
    if (numberWitOperator) {
        return Math.floor(evaluateNumberWithOperator(2, numberWitOperator))
    }
    return 2
}
function three(numberWitOperator) {
    if (numberWitOperator) {
        return Math.floor(evaluateNumberWithOperator(3, numberWitOperator))
    }
    return 3
}
function four(numberWitOperator) {
    if (numberWitOperator) {
        return Math.floor(evaluateNumberWithOperator(4, numberWitOperator))
    }
    return 4
}

function five(numberWitOperator) {
    if (numberWitOperator) {
        return Math.floor(evaluateNumberWithOperator(5, numberWitOperator))
    }
    return 5
}

function six(numberWitOperator) {
    if (numberWitOperator) {
        return Math.floor(evaluateNumberWithOperator(6, numberWitOperator))
    }
    return 6
}
function seven(numberWitOperator) {
    if (numberWitOperator) {
        return Math.floor(evaluateNumberWithOperator(7, numberWitOperator))
    }
    return 7
}
function eight(numberWitOperator) {
    if (numberWitOperator) {
        return Math.floor(evaluateNumberWithOperator(8, numberWitOperator))
    }
    return 8
}
function nine(numberWitOperator) {
    if (numberWitOperator) {
        return Math.floor(evaluateNumberWithOperator(9, numberWitOperator))
    }
    return 9
}

function plus(number) {
    return `+ ${number}`
}
function minus(number) {
    return `- ${number}`

}
function times(number) {
    return `* ${number}`
}
function dividedBy(number) {
    return `/ ${number}`
}

