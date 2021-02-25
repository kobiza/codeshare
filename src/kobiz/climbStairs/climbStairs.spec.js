const climbStairs = require('./climbStairs')

describe('climbStairs', () => {
    const testCases = [
        {
            input: 1,
            expectedOutput: 1
        },
        {
            input: 2,
            expectedOutput: 2
        },
        {
            input: 3,
            expectedOutput: 3
        },
        {
            input: 6,
            expectedOutput: 13
        },
        {
            input: 7,
            expectedOutput: 21
        },
    ]

    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = climbStairs(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
