class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const len = s1.length;
        let l = 0,
            r = 0,
            sFreq = {};

        for (let ch of s1) {
            sFreq[ch] = (sFreq[ch] || 0) + 1;
        }

        while (r < s2.length) {
            // Check for length
            let window = r - l + 1;

            // Shrink
            while (window > len) {
                l++;
                window = r - l + 1;
            }
            if (window === len) {
                let s2Freq = {};
                for (let i = l; i <= r; i++) {
                    s2Freq[s2[i]] = (s2Freq[s2[i]] || 0) + 1;
                }
                const result = Object.keys(s2Freq).every((item) => {
                    return s2Freq[item] === sFreq[item];
                });
                if (result) return true;
            }
            r++;
        }
        return false;
    }
}
