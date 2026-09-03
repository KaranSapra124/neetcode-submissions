class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        return s.replace(/[^a-zA-Z0-9]/g,"").split('').reverse().join('').toLowerCase()===s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()

    }
}
