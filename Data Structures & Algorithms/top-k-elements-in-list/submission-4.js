class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res = new Set()
        const freqMap = {}
        for (const ch of nums) {
            freqMap[ch] = (freqMap[ch] || 0) + 1
        }
        const keys = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a])
        let i = 0;
        while (i < k) {
            res.add(keys[i])
            i++
        }
        return [...res]
    }
}
