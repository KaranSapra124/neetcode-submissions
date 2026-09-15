class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        const isValidChar = (ch) => {
            return /^[a-zA-Z0-9]$/.test(ch);
        };

        while (l < r) {
            while (l < r && !isValidChar(s[l])) {
                l++;
            }

            while (l < r && !isValidChar(s[r])) {
                r--;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}
