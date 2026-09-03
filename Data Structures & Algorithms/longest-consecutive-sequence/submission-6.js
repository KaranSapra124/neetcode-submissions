class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length <= 1) return nums.length
          nums.sort((a,b)=>a-b)
    let maxLen = -Infinity,count = 0,hashSet = new Set()
    for(let i = 0;i < nums.length;i++){
        hashSet.add(nums[i])
    }
    // Create set arr
    let arr = [...hashSet]
    for(let i = 1;i <= arr.length-1;i++){
        let diff = arr[i] - arr[i-1]
        if(diff === 1){
            count++
             if(i === arr.length - 1){
                maxLen = Math.max(maxLen,count)
            }
        }else if(diff !== 1){
            maxLen = Math.max(maxLen,count)
            count = 0;
        }
    }
    return maxLen !== -Infinity ? maxLen + 1 : count + 1
    }
}
