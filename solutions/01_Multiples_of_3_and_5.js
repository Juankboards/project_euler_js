//solution-001
const sumMultiplesOf3And5 = (limit = 0) => { //if not passed, default limit is zero
	let sumMultiplesOf = num => num*sequenceSum(parseInt((Math.max(1,limit) - 1)/num))
	return sumMultiplesOf(3) + sumMultiplesOf(5) - sumMultiplesOf(15)
}

const sequenceSum = num => (num**2 + num)/2

module.exports = sumMultiplesOf3And5