const {hasPath, getPath, hasPathIteration, getShortestPath} = require('./maze')

describe('hasPath', () => {
    test('should return true', () => {
      const result = hasPath([
          [0,1,1,0],
          [0,0,0,0],
          [1,1,1,0],
          [0,0,0,0],
      ], [0,0], [3,0])

      expect(result).toBe(true)
    });

    test('should return false', () => {
        const result = hasPath([
            [0,1,1,0],
            [0,0,0,0],
            [1,1,1,0],
            [0,0,1,0],
        ], [0,0], [3,0])

        expect(result).toBe(false)
    });
})

describe('hasPathIteration', () => {
    test('should return true', () => {
        const result = hasPathIteration([
            [0,1,1,0],
            [0,0,0,0],
            [1,1,1,0],
            [0,0,0,0],
        ], [0,0], [3,0])

        expect(result).toBe(true)
    });

    test('should return false', () => {
        const result = hasPathIteration([
            [0,1,1,0],
            [0,0,0,0],
            [1,1,1,0],
            [0,0,1,0],
        ], [0,0], [3,0])

        expect(result).toBe(false)
    });
});

describe('getPath', () => {
    test('should return path', () => {
        const result = getPath([
            [0,1,1,0],
            [0,0,0,0],
            [1,1,1,0],
            [0,0,0,0],
        ], [0,0], [3,0])

        console.log('-----------------------------------')
        console.log('result', result)
        console.log('-----------------------------------')

        expect(result).toEqual([
            [0,0],
            [1,0],
            [1,1],
            [1,2],
            [1,3],
            [2,3],
            [3,3],
            [3,2],
            [3,1],
            [3,0],
        ])
    });

    test('should return null', () => {
        const result = getPath([
            [0,1,1,0],
            [0,0,0,0],
            [1,1,1,0],
            [0,0,1,0],
        ], [0,0], [3,0])

        expect(result).toBe(null)
    });
});

describe('getShortestPath', () => {
    test('should return path', () => {
        const result = getShortestPath([
            [0,1,1,0],
            [0,0,0,0],
            [1,1,1,0],
            [0,0,0,0],
        ], [0,0], [3,0])

        console.log('-----------------------------------')
        console.log('result', result)
        console.log('-----------------------------------')

        expect(result).toEqual([
            [0,0],
            [1,0],
            [1,1],
            [1,2],
            [1,3],
            [2,3],
            [3,3],
            [3,2],
            [3,1],
            [3,0],
        ])
    });

    test('should return null', () => {
        const result = getShortestPath([
            [0,1,1,0],
            [0,0,0,0],
            [1,1,1,0],
            [0,0,1,0],
        ], [0,0], [3,0])

        expect(result).toBe(null)
    });
})
