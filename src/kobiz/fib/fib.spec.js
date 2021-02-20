const fib = require('./fib')

describe('fib', () => {
    const testCases = [
        {
            input: 0,
            expectedOutput: 0
        },
        {
            input: 1,
            expectedOutput: 1
        },
        {
            input: 2,
            expectedOutput: 1
        },
        {
            input: 3,
            expectedOutput: 2
        },
        {
            input: 4,
            expectedOutput: 3
        },
        {
            input: 5,
            expectedOutput: 5
        },
        {
            input: 6,
            expectedOutput: 8
        },
    ]

    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = fib(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
