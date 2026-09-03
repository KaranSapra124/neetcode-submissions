class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length === 1) return false;
        const freq = {};
        for(let i = 0;i < nums.length;i++){
            freq[nums[i]] = (freq[nums[i]] || 0 ) + 1;
        }
    const objectVals = Object.values(freq);
  return  objectVals?.some((item)=>item > 1);
    }
    
}
