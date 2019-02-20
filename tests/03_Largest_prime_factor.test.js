//test-003

/*
What is the largest prime factor of a given number
*/

let { describe, test, results } = require('./../testSuite')
let largestPrimeFactor = require('./../solutions/03_Largest_prime_factor')

describe('Find the largest prime factor of a given number', () => {
	test('Should return 3 when given 6', () => {
		let result = largestPrimeFactor(6)
		let expected = 3
		return {passed: expected===result, expected, result}
	})
	test('Should return 1 when given 19', () => {
		let result = largestPrimeFactor(19)
		let expected = 1
		return {passed: expected===result, expected, result}
	})
	test('Should return 29 when given 13195', () => {
		let result = largestPrimeFactor(13195)
		let expected = 29
		return {passed: expected===result, expected, result}
	})
	test('Should return Infinity when given 0', () => {
		let result = largestPrimeFactor(0)
		let expected = Infinity
		return {passed: expected===result, expected, result}
	})
})

results()