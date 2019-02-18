//solution-002
const sumEvenTermsOfFibonacciBelow = (limit = 4000000) => { //if not passed, default limit is four millions
	return sumEvenFibonacciNumbers(limit, sum = 0, lastEvenTerm = 2, nextEvenTerm = 4*lastEvenTerm)
}

const sumEvenFibonacciNumbers = (limit, sum, lastEvenTerm, nextEvenTerm) => {
	return lastEvenTerm > limit? sum : sumEvenFibonacciNumbers(limit, sum += lastEvenTerm, nextEvenTerm, 4*nextEvenTerm + lastEvenTerm)
}

module.exports = sumEvenTermsOfFibonacciBelow