const shortestWay = require('./shortestWay')

describe('shortestWay', () => {
    const testCases = [
        {
            input: {
                distancesMatrix: [
                    [0, 10, 20, 30],
                    [-1, 0, 10, 15],
                    [-1, -1, 0, 30],
                    [-1, -1, -1, 0],
                ],
                src: 0, dest: 3
            },
            expectedOutput: {minCost: 25, shortestPath: [0, 1, 3]}
        },
        {
            input: {
                distancesMatrix: [
                    [0, 10, 20, 30, 5, 10],
                    [-1, 0, 10, 15, 30, 20],
                    [-1, -1, 0, 30, 20, 15],
                    [-1, -1, -1, 0, 40, 30],
                    [-1, -1, -1, -1, 0, 25],
                    [-1, -1, -1, -1, -1, 0],
                ],
                src: 1, dest: 4
            },
            expectedOutput: {minCost: 30, shortestPath: [1, 2, 4]}
        },
    ]


    testCases.forEach(({ input, expectedOutput }) => {
        test(`${input} -> ${expectedOutput}`, () => {
            const output = shortestWay(input)

            expect(output).toEqual(expectedOutput)
        })
    })
});
