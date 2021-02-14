const climbStairs = require('./climbStairs')

describe('climbStairs', () => {
    const testCases = [
        {
            input: 'input',
            expectedOutput: 'output'
        },
    ]

    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = climbStairs(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
