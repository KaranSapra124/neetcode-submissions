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
            sFreq = {},
            s2Freq = {};

        for (let ch of s1) {
            sFreq[ch] = (sFreq[ch] || 0) + 1;
        }

        while (r < s2.length) {
            s2Freq[s2[r]] = (s2Freq[s2[r]] || 0) + 1;
            // Check for length
            let window = r - l + 1;

            // Shrink
            while (window > len) {
                s2Freq[s2[l]]--;

                if (s2Freq[s2[l]] === 0) {
                    delete s2Freq[s2[l]];
                }

                l++;
                window = r - l + 1;
            }
            if (window === len) {
                const result = Object.keys(s2Freq).every((item) => {
                    return sFreq[item] === s2Freq[item];
                });
                if (result) return true;
            }
            r++;
        }
        return false;
    }
}
