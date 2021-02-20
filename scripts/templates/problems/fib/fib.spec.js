const fib = require('./fib')

describe('fib', () => {
    const testCases = [
        {
            input: 'input',
            expectedOutput: 'output'
        },
    ]

    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = fib(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
