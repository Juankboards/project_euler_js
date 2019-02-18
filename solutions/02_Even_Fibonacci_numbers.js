//solution-002
const sumEvenTermsOfFibonacci = (limit = 4000000) => { //if not passed, default limit is four millions
	if (limit < 2) return 0
	let sequence = [1, 2]
	let sum = 2
	let nextTerm = sequence[sequence.length - 1] + sequence[sequence.length - 2]
	while (nextTerm <= limit) {
		sum += nextTerm%2===0? nextTerm : 0
		sequence.push(nextTerm)
		nextTerm = sequence[sequence.length - 1] + sequence[sequence.length - 2]
	}
	return sum
}

module.exports = sumEvenTermsOfFibonacci