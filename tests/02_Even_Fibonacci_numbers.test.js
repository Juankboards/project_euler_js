//test-001

/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed an specified limit or four millions (if not specified), find the sum of the even-valued terms.
*/

let { describe, test, results } = require('./../testSuite')
let sumEvenTermsOfFibonacci = require('./../solutions/02_Even_Fibonacci_numbers')

describe('Find the sum of the even-valued terms of a finoacci sequence', () => {
	test('Should return 10 when limit is 10', () => {
		let result = sumEvenTermsOfFibonacci(10)
		let expected = 10
		return {passed: expected===result, expected, result}
	})
	test('Should return 0 when limit is less than 2', () => {
		let result = sumEvenTermsOfFibonacci(1)
		let expected = 0
		return {passed: expected===result, expected, result}
	})
	test('Should return 2 when limit is 2', () => {
		let result = sumEvenTermsOfFibonacci(2)
		let expected = 2
		return {passed: expected===result, expected, result}
	})
	test('Should return 0 when limit is negative', () => {
		let result = sumEvenTermsOfFibonacci(-13)
		let expected = 0
		return {passed: expected===result, expected, result}
	})
	test('Should return 4,613,732 when limit is not passed', () => {
		let result = sumEvenTermsOfFibonacci()
		let expected = 4613732
		return {passed: expected===result, expected, result}
	})
})

results()