class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let deque = []; // stores indices
        let result = [];

        for (let r = 0; r < nums.length; r++) {
            // 1️⃣ Remove indices that are outside the window
            while (deque.length && deque[0] < r - k + 1) {
                deque.shift();
            }

            // 2️⃣ Remove smaller elements from the back
            while (deque.length && nums[deque[deque.length - 1]] <= nums[r]) {
                deque.pop();
            }

            // 3️⃣ Add current index
            deque.push(r);

            // 4️⃣ Once window reaches size k
            if (r >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }
}
