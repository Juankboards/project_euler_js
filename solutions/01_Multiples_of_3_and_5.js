//solution-001
const sumMultiplesOf3And5 = limit => {
	let sum = 0
	for (let i=1; i<limit; i++) {
		sum += isMultipleOf3Or5(i)? i : 0
	}
	return sum
}

const isMultipleOf3Or5 = num => (num%3==0 || num%5==0)

module.exports = sumMultiplesOf3And5