//test-001

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

let { describe, test, results } = require('./../testSuite')
let sumMultiplesOf3And5 = require('./../solutions/01_Multiples_of_3_and_5')

describe('Find the sum of natural multiples of 3 or 5 numbers below an specified limit', () => {
	test('Should return 23 when limit is 10', () => {
		let result = sumMultiplesOf3And5(10)
		let expected = 23
		return {passed: expected===result, expected, result}
	})
	test('Should return 233168 when limit is 1000', () => {
		let result = sumMultiplesOf3And5(1000)
		let expected = 233168
		return {passed: expected===result, expected, result}
	})
	test('Should return 0 when limit is 0', () => {
		let result = sumMultiplesOf3And5(0)
		let expected = 0
		return {passed: expected===result, expected, result}
	})
	test('Should return 0 when limit is negative', () => {
		let result = sumMultiplesOf3And5(-10)
		let expected = 0
		return {passed: expected===result, expected, result}
	})
	test('Should return 0 when limit is not passed', () => {
		let result = sumMultiplesOf3And5()
		let expected = 0
		return {passed: expected===result, expected, result}
	})
})

results()