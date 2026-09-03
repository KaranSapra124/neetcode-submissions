class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let i = 0, j = 0;
        let freqMap = {}
        let len = 0;
        while (j <= s.length - 1) {
            let ch = s[j];
            freqMap[ch] = (freqMap[ch] || 0) + 1;
            while (freqMap[ch] > 1) {
                freqMap[s[i]]--;
                i++;
            }
            let size = j - i + 1;
            len = Math.max(len, size);
            j++;
        }
        return len
    }
}
