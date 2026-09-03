class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      let j = 1;
      let i = 0;
      let len = nums.length;
      while(j < len){
        if(nums[i] + nums[j] === target) return [i,j];
        else if(nums[i]+ nums[j] !== target &&  j !== len-1){
            j++
        }else{
            i++;
            j = i + 1
        }
      }
    }

}
