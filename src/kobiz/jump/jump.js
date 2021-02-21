/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const getMinJumps = (targetIndex, jumps) => {
        if (targetIndex === 0) {
            return jumps
        }

        const stack = []

        for (let i = targetIndex - 1; i >= 0; i--) {
            if (i + nums[i] >= targetIndex) {
                stack.push({index: i, jumps: jumps + 1})
            }
        }

        if (stack.length === 0) {
            return false
        }

        const next = stack.pop()
        return getMinJumps(next.index, next.jumps)
    }

    return getMinJumps(nums.length - 1, 0)
};

module.exports = jump;

