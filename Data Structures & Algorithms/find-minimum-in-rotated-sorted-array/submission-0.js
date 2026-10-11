class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const n = nums
        n.sort((a, b) => a - b);
        return n[0];
    }
}
