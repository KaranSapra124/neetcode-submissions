class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0,
            r = 0,
            maxLen = 0,
            freq = {},
            maxFreq = -Infinity,
            char = null;
        while (r < s.length) {
            freq[s[r]] = (freq[s[r]] || 0) + 1;

            maxFreq = Math.max(maxFreq, freq[s[r]]);

            let windowLen = r - l + 1;

            while (windowLen - maxFreq > k) {
                freq[s[l]] -= 1;
                l += 1;
                windowLen = r - l + 1;
            }

            maxLen = Math.max(maxLen, windowLen);
            r++;
        }

        return maxLen;
    }
}
