//mini test framework

const createTestSuite = () => {
	let passed = 0
	let failed = 0
	let log = []
	return ({
		describe: (description, callback) => {
			console.log('\n')
			console.log('\x1b[33m%s\x1b[0m', description)
			console.group();
			callback()
			console.groupEnd()
		},
		test: (description, callback) => {
			let result = callback()
			if (result.passed===true) {
				console.log('\x1b[32m%s\x1b[0m', description)
				passed++
			} else {
				console.log('\x1b[31m%s\x1b[0m', description)
				console.group()
				console.log('\x1b[32m%s\x1b[0m', `Expected: ${result.expected}`)
				console.log('\x1b[31m%s\x1b[0m', `Result: ${result.result}`)
				console.groupEnd()
				failed++
			}
		},
		results: () => {
			console.group();
			console.log('\n\x1b[32m%s\x1b[0m', `Passed Tests: ${passed}`)
			console.log('\x1b[31m%s\x1b[0m', `Failed Tests: ${failed}`)
			console.groupEnd()
		},
	})
}

module.exports = createTestSuite()