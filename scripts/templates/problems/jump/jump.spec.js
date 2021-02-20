const jump = require('./jump')

describe('jump', () => {
    const testCases = [
        {
            input: 'input',
            expectedOutput: 'output'
        },
    ]

    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = jump(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
