const {chunk} = require('./myLodash')

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

})
