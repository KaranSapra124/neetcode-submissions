class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqMap = {};
        let res = new Set()
        for(const item of nums){
            freqMap[item] =(freqMap[item]||0)+1
        }
        const freqArr = Object.keys(freqMap).sort((a,b)=>freqMap[b]-freqMap[a])
        let i = 0;
        while(i <k){
            res.add(freqArr[i])
            i++
        }
        return [...res];
    }
}
