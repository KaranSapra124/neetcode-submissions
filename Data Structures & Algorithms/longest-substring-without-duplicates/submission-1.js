class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        return this.longestStr(s)
    }
    longestStr(s){
    let i = 0,j = 0;
    let freq = {};
    let maxLen = 0;
  while(j <= s.length-1){
      let ch = s[j];
      freq[ch] = (freq[ch] || 0) + 1;
      while(freq[ch]>1 ){
          freq[s[i]]--;
       i++;
      }
        let size = j - i + 1  
      maxLen = Math.max(maxLen , size);
      j++;
  }
    return maxLen;
}
}
