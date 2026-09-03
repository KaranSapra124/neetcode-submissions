class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let i = 0, j = 0, maxFreq = 0;
        let freq = {};
        let maxLen = 0;
        while (j < s.length) {
            let ch = s[j];
            freq[ch] = (freq[ch] || 0) + 1;
            maxFreq = Math.max(maxFreq, freq[ch])

            while ((j - i + 1) - maxFreq > k) {
                freq[s[i]]--
                i++;
            }
            maxLen = Math.max(maxLen,j-i+1);
            j++;
        }
        return maxLen;
    }
}
