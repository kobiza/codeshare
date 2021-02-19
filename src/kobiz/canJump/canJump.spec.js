const canJump = require('./canJump')

describe('canJump', () => {
    const testCases = [
        {
            input: [1,0,4],
            expectedOutput: false
        },
        {
            input: [2,0,4],
            expectedOutput: true
        },
        {
            input: [3,0,4],
            expectedOutput: true
        },
        {
            input: [2,3,1,1,4],
            expectedOutput: true
        },
        {
            input: [2,3,0,1,4],
            expectedOutput: true
        },
        {
            input: [2,3,1,1,4],
            expectedOutput: true
        },
        {
            input: [3,2,1,0,4],
            expectedOutput: false
        },
    ]


    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = canJump(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
