const masterTemplate = require('./masterTemplate')

describe('masterTemplate', () => {
    const testCases = [
        {
            input: 'input',
            expectedOutput: 'output'
        },
    ]

    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = masterTemplate(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
