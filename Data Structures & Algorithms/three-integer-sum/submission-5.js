class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const resultedSet = new Set();
        // const trackMap = new Map();
        for (let k = 0; k < nums.length - 2; k++) {
            if (k > 0 && nums[k] === nums[k - 1]) continue;
            let triplet = null;
            // let target = -nums[k];
            let i = k + 1,
                j = nums.length - 1;
            while (i < j) {
                let sum = nums[i] + nums[j] + nums[k];
                if (sum === 0) {
                    triplet = [nums[k], nums[i], nums[j]];

                    resultedSet.add(triplet);

                    i++;
                    j--;

                    while (i < j && nums[i] === nums[i - 1]) i++;
                } else if (sum < 0) {
                    i++;
                } else {
                    j--;
                }
            }
        }
        return [...resultedSet];
    }
}
