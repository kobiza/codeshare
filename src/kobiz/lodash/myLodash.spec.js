const {chunk, difference} = require('./myLodash')

describe('my lodash', () => {
    describe('chunk', () => {
        test('should work', () => {
            const result = chunk([1,2,3])

            expect(result).toEqual([[1], [2], [3]])
        });

        test('should work 2', () => {
            const result = chunk([1,2,3,4,5], 2)

            expect(result).toEqual([[1,2], [3,4], [5]])
        });
    });

    describe('difference', () => {
        test('should work', () => {
            const r = difference([1, 3, 6, 2, 1, 6], [1, 4, 3, 1])

            expect(r).toEqual([6,2,6])
        });

        test('should work with different types', () => {
            const r = difference([1, '3', 6, 2, 1], [1, 4, 3, 1])

            expect(r).toEqual(['3', 6, 2])
        });

        test('should work with objects by ref', () => {
            var a = {a: 1}
            var b = {b: 1}
            const r = difference([a, b], [b, {a: 1}])

            expect(r).toEqual([a])
        });
    });
})
