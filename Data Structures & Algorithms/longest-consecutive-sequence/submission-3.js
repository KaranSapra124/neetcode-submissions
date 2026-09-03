class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
     longestConsecutive(nums) {
        if(nums.length === 0) return 0
       const hashSet = new Set([...nums.sort((a,b)=>a-b)]);
        let arr = [...hashSet]
    let max  = -Infinity;
        let count = 1;
        for (let i = 0; i < arr.length; i++) {
               if(arr[i] < arr[i+1] && arr[i+1] - arr[i] === 1){
                   count++;
               }
            else if(arr[i+1] - arr[i] !== 1){
                max = Math.max(max,count)
                count = 1
            }
        }
        return max;
    }
}
