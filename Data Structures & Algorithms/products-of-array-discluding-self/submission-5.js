class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftArr = new Array(nums.length + 1).fill(1);
        let rightArr = new Array(nums.length + 1).fill(1);
        let result = new Array(nums.length).fill(1);

        // Left arr
        for (let i = 0; i < nums.length; i++) {
            leftArr[i + 1] = leftArr[i] * nums[i];
        }
        // right arr
        for (let i = nums.length - 1; i >= 0; i--) {
            rightArr[i] = rightArr[i + 1] * nums[i];
        }
        // Final arr
        for (let i = 0; i < nums.length; i++) {
           
                result[i] = leftArr[i] * rightArr[i + 1];
            
        }
        return result;
    }
}
