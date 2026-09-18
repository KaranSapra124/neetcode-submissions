
class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        
        let freq = {};
        for(let i in nums){
          freq[nums[i]] = (freq[nums[i]] + 1 || 1)
        }
        const keys = Object.keys(freq);
        for(let k = 0;k < keys.length;k++){
            if(freq[keys[k]]>=2){
                return true;
            }
        }
        return false;
    }
}



