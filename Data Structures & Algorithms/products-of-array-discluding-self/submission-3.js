class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const leftArr = new Array(nums.length + 1).fill(1);
        const rightArr = new Array(nums.length + 1).fill(1);
        const result = new Array(nums.length).fill(1);
        // Construct left and right array
        for (let i = 0; i < nums.length; i++) {
            leftArr[i + 1] = leftArr[i] * nums[i];
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            rightArr[i] = rightArr[i + 1] * nums[i];
        }
        // Now lets get the prefix
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                result[i] = rightArr[i + 1];
            } else if (i === nums.length - 1) {
                result[i] = leftArr[i];
            } else {
                result[i] = leftArr[i] * rightArr[i + 1];
            }
        }
        return result;
    }
}
