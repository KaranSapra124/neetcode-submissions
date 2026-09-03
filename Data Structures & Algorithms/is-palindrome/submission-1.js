class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length===0) return true
        let str = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
        let i = 0;
        let j = str.length-1;
        console.log(str)
        while(i<j){
            
         if(str[i]!==str[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
