//solution-001
const sumMultiplesOf3And5 = (limit = 0) => { //if not passed, default limit is zero
	if (limit <= 0) return 0 //we only consider natural numbers
	let sumMultiplesOf = sumMultiplesBelow(limit)	
	return sumMultiplesOf(3) + sumMultiplesOf(5) - sumMultiplesOf(15)
}

const sequenceSum = num => (num**2 + num)/2
const sumMultiplesBelow = limit => num => num*sequenceSum(parseInt((limit - 1)/num))

module.exports = sumMultiplesOf3And5