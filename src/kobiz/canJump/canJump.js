/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const falsyIndexes = {}
    const canJumpRec = (index) => {
        if (falsyIndexes[index]) {
            return false
        }
        if (index + nums[index] >= nums.length - 1) {
            return true
        }

        if (index === nums.length - 1) {
            falsyIndexes[index] = true
            return false
        }

        for (let i = nums[index]; i > 0; i--) {
            if (canJumpRec(index + i)) {
                return true
            }
        }
        falsyIndexes[index] = true
        return false
    }

    return canJumpRec(0)
};

module.exports = canJump;

