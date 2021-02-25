const factorial = num =>
{
    let val=1;
    for (let i = 2; i <= num; i++)
        val = val * i;
    return val;
}

const kFromN = (k, n) => factorial(n) / (factorial(k) * factorial(n - k))

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let result = 1
    for (let oneReturns = n - 2; oneReturns >= 0; oneReturns-=2) {
        const twoReturns = (n - oneReturns) / 2
        const size = oneReturns + twoReturns

        result += kFromN(twoReturns, size)
    }

    return result
};

module.exports = climbStairs;

