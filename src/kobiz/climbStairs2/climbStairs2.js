/**
 * @param {number} n
 * @return {number}
 */
var climbStairs2 = function(n) {
    const cache = {
        1: 1,
        2: 2
    }
    const climbStairsRec = (currN) => {
        if (cache[currN]) {
            return cache[currN]
        }

        cache[currN] = climbStairsRec(currN - 1) + climbStairsRec(currN - 2)
        return cache[currN]
    }

    return climbStairsRec(n)
};

module.exports = climbStairs2;

