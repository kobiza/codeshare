/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const falsyIndexes = {}
    const canJumpRec = (_nums) => {
        if (falsyIndexes[_nums.length]) {
            return false
        }
        if (_nums[0] >= _nums.length - 1) {
            return true
        }

        if (_nums.length <= 1) {
            falsyIndexes[_nums.length] = true
            return false
        }

        for (let i = _nums[0]; i > 0; i--) {
            if (canJumpRec(_nums.slice(i))) {
                return true
            }
        }
        falsyIndexes[_nums.length] = true
        return false
    }

    return canJumpRec(nums)
};

module.exports = canJump;

