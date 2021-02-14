const xorOperation = require('./xorOperation')

describe('xorOperation', () => {
    const testCases = [
        {
            input: 'input',
            expectedOutput: 'output'
        },
    ]

    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = xorOperation(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
