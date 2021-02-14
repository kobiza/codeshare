const isValidBST = require('./isValidBST')

describe('isValidBST', () => {
    const testCases = [
        {
            input: 'input',
            expectedOutput: 'output'
        },
    ]

    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = isValidBST(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
