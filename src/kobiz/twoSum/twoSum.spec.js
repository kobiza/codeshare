const twoSum = require('./twoSum')

describe('twoSum', () => {
    const testCases = [
        {
            input: 'input',
            expectedOutput: 'output'
        },
    ]

    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = twoSum(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
