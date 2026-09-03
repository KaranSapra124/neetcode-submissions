class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0;
        let j = 1;
        let len = nums.length - 1;
        while (i < len) {
            if (nums[i] + nums[j] === target) return [i, j]
            else if (nums[i] + nums[j] !== target && j !== len) {
                j++
            } else {
                i++;
                j = i + 1
            }
        }
    }
}
