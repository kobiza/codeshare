/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    let n2 = 0
    let n1 = 1
    for (let i = 2; i <= n; i++) {
        const curr = n1 + n2
        n2 = n1
        n1 = curr
    }

    return n1
};

module.exports = fib;

