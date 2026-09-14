class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       let count = 1, maxlen = -Infinity;
    if (nums.length === 1) return 1;
    nums.sort((a, b) => a - b);
    let hashSet = new Set([...nums]);
    let hashedArr = [...hashSet];
    if (nums.length <= 1) return nums.length
// console.log()
    for (let i = 1; i <= hashedArr.length - 1; i++) {
        console.log(count)
        let diff = hashedArr[i] - hashedArr[i - 1]
        if (diff === 1) {
            count++
            if (i === nums.length - 1) {
                maxlen = Math.max(maxlen, count)
            }
        }
        else if (diff !== 1) {
            maxlen = Math.max(maxlen, count)
            count = 1
        }
    }
    maxlen = Math.max(maxlen,count)
    return maxlen !== -Infinity ? maxlen : count
    }
}
