class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let l = 0,
            r = 0,
            result = "",
            minLen = Infinity,
            tFreq = {},
            sFreq = {};
        // Count frequencies first
        for (const ch of t) {
            tFreq[ch] = (tFreq[ch] || 0) + 1;
        }

        let have = 0;
        let need = Object.keys(tFreq).length;
        // Iterate s
        while (r < s.length) {
            sFreq[s[r]] = (sFreq[s[r]] || 0) + 1;

            if (tFreq[s[r]] !== undefined && tFreq[s[r]] === sFreq[s[r]]) {
                have++;
            }

            while (have === need) {
                let windowLen = r - l + 1;
                if (windowLen < minLen) {
                    minLen = windowLen;
                    result = s.substring(l, r + 1);
                }
                const leftChar = s[l];
                sFreq[leftChar]--;

                if (tFreq[leftChar] !== undefined && sFreq[leftChar] < tFreq[leftChar]) {
                    have--;
                }
                l++;
            }
            r++;
        }
        // console.log(l, r, tFreq)
        return result;
    }
}
