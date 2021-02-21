const jump = require('./jump')

describe('jump', () => {
    const testCases = [
        {
            input: [2,3,1,1,4],
            expectedOutput: 2
        },
        {
            input: [4,1,1,1,4,1,1,1,5],
            expectedOutput: 2
        },
        {
            input: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,6,1,1,1,5],
            expectedOutput: 2
        },
    ]

    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = jump(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
