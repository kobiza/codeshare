const recoverTree = require('./recoverTree')

describe('recoverTree', () => {
    const testCases = [
        {
            input: 'input',
            expectedOutput: 'output'
        },
    ]

    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = recoverTree(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
