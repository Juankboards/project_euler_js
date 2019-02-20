//solution-003
const largestPrimeFactor = (num) => {
	if(!num) return Infinity
	let primeFactor = findFactors(num, factor => {		
		if(factor && isPrime(factor)) {
			return true
		}
	}, false)
	return primeFactor || 1
	
}

const isPrime = num => {
	return findFactors(num, factor => {		
		if(factor) return false
		return true
	}, true)
}

const findFactors = (num, fn, halt) => {
	let maxNum = Math.ceil(Math.sqrt(num))
	for(let i = maxNum; i >= 2; i--) {
		if (!(num%i)) {
			if(fn(i)) return i
			if(!fn(i) && halt) return false
		}
	}	
	return fn()
}

module.exports = largestPrimeFactor