class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let arr = new Set(nums),
            count = 0,
            longest = 0;

        for (const a of arr) {
            if (!arr.has(a - 1)) {
                let current = a;
                let length = 1
                while (arr.has(current + 1)) {
                    current++;
                    length++
                }
                longest = Math.max(longest,length)
            }
        }
        return longest
    }
}
