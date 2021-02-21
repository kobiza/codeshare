/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length === 1) {
        return 0
    }

    let jumpCounter = 0
    let index = 0

    while (index + nums[index] < nums.length -1) {
        let nextIndex = index + nums[index]
        let maxJumpFromIndex = nextIndex + nums[nextIndex]
        for (let i = nextIndex - 1; i > index; i--) {
            const jumpFromIndex = i + nums[i]
            if (jumpFromIndex > maxJumpFromIndex) {
                nextIndex = i
                maxJumpFromIndex = jumpFromIndex
            }
        }

        index = nextIndex
        jumpCounter++
    }

    return jumpCounter + 1
};

module.exports = jump;

