class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
     const anagramMap = new Map();
  for(const originalStr of strs){
    const key = originalStr.split('').sort().join('');
    if(anagramMap.has(key)){
      anagramMap.get(key).push(originalStr)
    }else{
      anagramMap.set(key,[originalStr])
    }
  }
  return [...anagramMap.values()]
    }

}
