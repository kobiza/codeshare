/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const fibRec = (_n) => {
        if (_n === 0) {
            return 0
        }

        if (_n === 1) {
            return 1
        }

        return fibRec(_n-1) + fibRec(_n-2)
    }

    return fibRec(n)
};

module.exports = fib;

