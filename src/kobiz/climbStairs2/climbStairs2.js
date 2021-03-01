/**
 * @param {number} n
 * @return {number}
 */
var climbStairs2 = function(n) {
    if (n === 1) {
        return 1
    }

    if (n === 2) {
        return 2
    }

    return climbStairs2(n - 1) + climbStairs2(n - 2)
};

module.exports = climbStairs2;

