const canJump = require('./canJump')

describe('canJump', () => {
    const testCases = [
        {
            input: 'input',
            expectedOutput: 'output'
        },
    ]

    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = canJump(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
