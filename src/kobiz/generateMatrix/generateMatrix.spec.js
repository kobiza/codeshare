const generateMatrix = require('./generateMatrix')

describe('generateMatrix', () => {
    const testCases = [
        {
            input: 3,
            expectedOutput: [[1,2,3],[8,9,4],[7,6,5]]
        },
        {
            input: 1,
            expectedOutput: [[1]]
        },
        {
            input: 4,
            expectedOutput: [
                [1, 2, 3, 4],
                [12, 13, 14, 5],
                [11, 16, 15, 6],
                [10, 9, 8, 7],
            ]
        },
    ]

    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = generateMatrix(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});

