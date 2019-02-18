//solution-002
const sumEvenTermsOfFibonacciBelow = (limit = 4000000) => { //if not passed, default limit is four millions
	return sumEvenFibonacciNumbers(limit, sum = 0, firstTerm = 1, secondTerm = 1, nextTerm = firstTerm + secondTerm)
}

const sumEvenFibonacciNumbers = (limit, sum, firstTerm, secondTerm, nextTerm) => {
	return nextTerm > limit? sum : sumEvenFibonacciNumbers(limit, sum += nextTerm%2? 0 : nextTerm, secondTerm, nextTerm, secondTerm + nextTerm)
}

module.exports = sumEvenTermsOfFibonacciBelow