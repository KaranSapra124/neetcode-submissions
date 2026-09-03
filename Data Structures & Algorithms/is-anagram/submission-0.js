class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let freq_s = {} 
        let freq_t = {};
        for(let i = 0;i < s.length;i++){
            freq_s[s[i]] = (freq_s[s[i]] || 0 ) + 1;
            freq_t[t[i]] = (freq_t[t[i]] || 0 ) + 1;
        }
       for(let i = 0;i < s.length;i++){
        if(freq_s[s[i]] !== freq_t[s[i]]){
return false;
        }
       }
       return true;
    }
}
