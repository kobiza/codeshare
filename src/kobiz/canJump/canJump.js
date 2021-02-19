/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const canJumpRec = (targetIndex) => {
        if (targetIndex === 0) {
            return true
        }

        const stack = []

        for (let i = targetIndex - 1; i >= 0; i--) {
            if (i + nums[i] >= targetIndex) {
                stack.push(i)
            }
        }

        if (stack.length === 0) {
            return false
        }

        return canJumpRec(stack.pop())
    }

    return canJumpRec(nums.length - 1)
};

module.exports = canJump;

