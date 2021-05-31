function add (a, b) {
	return a + b;
}
function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	return arr.reduce((totalSum, number) => {
		return totalSum + number;
	}, 0);
}

function multiply (arr) {
	return arr.reduce((totalSum, number) => {
		return totalSum * number;
	}, 1);
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

function operate(operator, a, b) {

}
