class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let n = nums
        let l = 0,
            r = n.length - 1;

        while (l < r) {
            let mid = Math.floor((l + r) / 2);

            if (n[mid] > n[r]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        return n[l];
    }
}
