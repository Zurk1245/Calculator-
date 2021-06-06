let number = document.getElementById('number');
let lastOperation = document.getElementById('last-operation');
let firstNumberToSave;
let secondNumberToSave;
let operatorToUse;
let partialResult;
let result;

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}   

function multiply(a, b) {
    return a * b;
}

function power(a, b) {
	return a ** b;
}

function factorial(num) {
	if (num === 0) {
		return 1;
	}
	let result = num;
	for (let i = num - 1; i >= 1; i--) {
		result *= i;
	}
	return result;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    } else if (operator === '-') {
        return subtract(a, b);
    } else if (operator === '*') {
        return multiply(a, b);
    } else if (operator === '**') {
        return power(a, b);
    } else if (operator === '!') {
        return factorial(a);
    } else if (operator === '/') {
        return divide(a, b);
    }
}

let button9 = document.getElementById('button__9');
button9.addEventListener('click', populateNumber);

let button8 = document.getElementById('button__8');
button8.addEventListener('click', populateNumber);

let button7 = document.getElementById('button__7');
button7.addEventListener('click', populateNumber);

let button6 = document.getElementById('button__6');
button6.addEventListener('click', populateNumber);

let button5 = document.getElementById('button__5');
button5.addEventListener('click', populateNumber);

let button4 = document.getElementById('button__4');
button4.addEventListener('click', populateNumber);

let button3 = document.getElementById('button__3');
button3.addEventListener('click', populateNumber);

let button2 = document.getElementById('button__2');
button2.addEventListener('click', populateNumber);

let button1 = document.getElementById('button__1');
button1.addEventListener('click', populateNumber);

let button0 = document.getElementById('button__0');
button0.addEventListener('click', populateNumber);

let buttonPoint = document.getElementById('button__point');
buttonPoint.addEventListener('click', populateNumber)

let clearButton = document.getElementById('button__clear');
clearButton.addEventListener('click', clearDisplay);

let multiplyButton = document.getElementById('button__multiply');
multiplyButton.addEventListener('click', () => {
    adjustFirstAndSecondNumbersVariables();
    updateDisplay('*');
});

let divideButton = document.getElementById('button__divide');
divideButton.addEventListener('click', () => {
    adjustFirstAndSecondNumbersVariables();
    updateDisplay('/');
});

let subtractButton = document.getElementById('button__subtract');
subtractButton.addEventListener('click', () => {
    adjustFirstAndSecondNumbersVariables();
    updateDisplay('-');
});

let addButton = document.getElementById('button__add');
addButton.addEventListener('click', () => {
    adjustFirstAndSecondNumbersVariables();
    updateDisplay('+');
});

let equalButton = document.getElementById('button__equal');
equalButton.addEventListener('click', () => {    
    getSecondNumber();
    if (firstNumberToSave === undefined) {
        return;
    } else if (number.textContent == "No dividing by 0!" || number.textContent == "NaN") {
        return;
    } else if (operatorToUse === '/' && secondNumberToSave === 0) {
        clearDisplay();
        number.textContent = "No dividing by 0!";
        return;
    }
    result = operate(operatorToUse, firstNumberToSave, secondNumberToSave);
    clearDisplay();
    if (result > 99999999999999) {
        number.textContent = 'Number too big!';
        return;
    }
    number.textContent = result;
    reduceDecimals();
});

let deleteButton = document.getElementById('button__clear-last');
deleteButton.addEventListener('click', () => {
    if (number.textContent == "No dividing by 0!" || number.textContent == "NaN" || number.textContent === 'Number too big!') {
        return;
    }
    let i = number.textContent.length - 1;
    let lastNumberErased = number.textContent.replace(number.textContent[i], '');
    number.textContent = lastNumberErased;
})

function reduceDecimals() {
    while (number.textContent.length > 14) {
            let j = number.textContent.length - 1;
            let lastNumberErased = number.textContent.replace(number.textContent[j], '');
            number.textContent = lastNumberErased;
    }
}


function clearDisplay() { 
    number.textContent = '';
    lastOperation.textContent = '';
    firstNumberToSave = undefined;
    secondNumberToSave = undefined;
}

window.addEventListener('keypress', populateNumber);

function populateNumber(e) {
    if (lastOperation.textContent === 'NaN') return;
    if (number.textContent == "No dividing by 0!" || number.textContent == "NaN" || number.textContent === 'Number too big!') {
        return;
    }
    if (number.textContent.length === 14) return;
    let numberToappend = document.createElement('span');
    
    switch(e.key) {
       case '1':  
        numberToappend.textContent = '1';
        number.appendChild(numberToappend);
        return;
       
       case '2':
        numberToappend.textContent = '2';
        number.appendChild(numberToappend);
        return; 

       case '3':
        numberToappend.textContent = '3';
        number.appendChild(numberToappend);
        return; 
         
       case '4':
        numberToappend.textContent = '4';
        number.appendChild(numberToappend);
        return;
         
       case '5':
        numberToappend.textContent = '5';
        number.appendChild(numberToappend);
        return;
         
       case '6':
        numberToappend.textContent = '6';
        number.appendChild(numberToappend);
        return;
         
       case '7':
        numberToappend.textContent = '7';
        number.appendChild(numberToappend);
        return;
         
       case '8':
        numberToappend.textContent = '8';
        number.appendChild(numberToappend);
        return;
         
       case '9':
        numberToappend.textContent = '9';
        number.appendChild(numberToappend);
        return;
       
       case '0':
        numberToappend.textContent = '0';
        number.appendChild(numberToappend);
        return;
         
       case '.':
        if (number.textContent.includes('.')) return;
        if (number.textContent == '') return;   
        numberToappend.textContent = '.';
        number.appendChild(numberToappend);
        return;
    } 
    
    numberToappend.textContent = this.innerHTML;
    if (this.innerHTML === '.' && number.textContent.includes('.')) return;
    if (this.innerHTML === '.' && number.textContent == '') return;
    number.appendChild(numberToappend);
}

function updateDisplay(operator) {
    if (number.textContent == "No dividing by 0!" || number.textContent == "NaN" || number.textContent === 'Number too big!' || number.textContent === '') {
        return;
    }
    if (firstNumberToSave === undefined) {
        firstNumberToSave = number.textContent;
    }

    reduceDecimals();
    operatorToUse = operator;
    number.textContent = '';
    lastOperation.textContent = firstNumberToSave + ' ' + operatorToUse;
    firstNumberToSave = parseFloat(firstNumberToSave);
}

function getSecondNumber() {
     secondNumberToSave = number.textContent;
     secondNumberToSave = parseFloat(secondNumberToSave);
}

function adjustFirstAndSecondNumbersVariables() {
    if (firstNumberToSave != undefined) {
        secondNumberToSave = number.textContent;
        secondNumberToSave = parseFloat(secondNumberToSave);
        partialResult = operate(operatorToUse, firstNumberToSave, secondNumberToSave);
        lastOperation.textContent = partialResult;
        firstNumberToSave = partialResult;
        secondNumberToSave = undefined;
    }
}