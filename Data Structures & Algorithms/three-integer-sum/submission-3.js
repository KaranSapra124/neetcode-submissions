class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const resultedSet = new Set();
        const trackMap = new Map();
        for (let k = 0; k < nums.length - 2; k++) {
            let triplet = null;
            let target = -nums[k];
            let i = k + 1,
                j = nums.length - 1;
            while (i < j) {
                let sum = nums[i] + nums[j];
                if (sum === target) {
                    triplet = [nums[k], nums[i], nums[j]];

                    if (!trackMap.has(JSON.stringify(triplet))) {
                        resultedSet.add(triplet);
                        trackMap.set(`${JSON.stringify(triplet)}`, true);
                    }
                    i++;
                } else if (sum < target) {
                    i++;
                } else {
                    j--;
                }
            }
        }
        return [...resultedSet];
    }
}
