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
    const numberOfSeries = Math.floor(n / 2) + 1
    let result = 1
    for (let twoReturns = 1; twoReturns < numberOfSeries; twoReturns++) {
        const oneReturns = n - twoReturns * 2
        const size = oneReturns + twoReturns

        result += kFromN(twoReturns, size)
    }

    return result
};

module.exports = climbStairs;

