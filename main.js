const screen = document.getElementById('screen')

function sum(x,y){
    return x+y
}

function difference(x,y){
    return x-y
}

function multiply(x,y){
    return x*y
}

function divide(x,y){
    return x/y
}

function precetnage(x) {
    return x / 100
}

function negate(x) {
    return x * (-1)
}


let numbers = ['1','2','3','4','5','6','7','8','9','0','.']
let actionBtn = ['÷','×','-','+','=','%', '+/-']
let storedValue = ''
let parsedValue1 = 0
let parsedValue2 = 0
let storeLastAction = ''
let isLastButtonAction = false

this.onclick = function(event) {
    const name = event.target.getAttribute('name')
    let isNum = numbers.includes(name)
    let isActionBtn = actionBtn.includes(name)
    if (isNum) {
        isNum = false
        printNum(name)
    }
    if (isActionBtn) {
        isActionBtn = false
        printActionButton(name)
    }
    switch (name) {
        case 'C':
            clearAll()
            break;
        case '%':
                screen.innerHTML = precetnage(parseFloat(storedValue))
                break;
        case '+/-':
                storedValue = negate(parseFloat(storedValue))
                screen.innerHTML = storedValue
                break;
    }
}

function printNum(content){
    if (isLastButtonAction){
        storedValue += content
        screen.innerHTML = content
        isLastButtonAction = false
    }
    else {
        storedValue += content
        screen.innerHTML += content
    }
}

function printActionButton(content){
    isLastButtonAction = true
    if (content != '=' && content != '%' && content != '+/-'){
        parsedValue1 = parseFloat(storedValue)
        storedValue = ''
        storeLastAction = content
    }
    else {
        parsedValue2 = parseFloat(storedValue)
        switch (storeLastAction) {
            case '+':
                screen.innerHTML = sum(parsedValue1,parsedValue2)
                break;
            case '-':
                screen.innerHTML = difference(parsedValue1,parsedValue2)
                break;
            case '÷':
                screen.innerHTML = divide(parsedValue1,parsedValue2)
                break;
            case '×':
                screen.innerHTML = multiply(parsedValue1,parsedValue2)
                break;
            default: break;
        }        
    }
}

function clearAll() {
    storedValue = ''
    parsedValue1 = 0
    parsedValue2 = 0
    storeLastAction = ''
    isLastButtonAction = false
    screen.innerHTML = ''
}


