const climbStairs2 = require('./climbStairs2')

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
            const output = climbStairs2(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
