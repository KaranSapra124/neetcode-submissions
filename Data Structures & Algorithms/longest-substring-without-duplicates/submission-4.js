class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0,
            r = 0,
            maxLen = 0,
            freq = {};
        // While loop for itertion over string
        while (r < s.length) {
            // Create freq map
            freq[s[r]] = (freq[s[r]] || 0) + 1;
            // Increase left or shrink window when duplicate arrives
            while (freq[s[r]] > 1) {
                freq[s[l]]--;
                l++;
            }
            maxLen = Math.max(maxLen, r - l + 1);
            r++;
        }
        return maxLen
    }
}
