const generateMatrix = require('./generateMatrix')

describe('generateMatrix', () => {
    const testCases = [
        {
            input: 'input',
            expectedOutput: 'output'
        },
    ]

    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = generateMatrix(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
