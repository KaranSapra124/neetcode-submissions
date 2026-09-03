class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    let result = [];
    let frequencies = this.countFrequencies(strs)
    let visited = new Set();
    for(let i  = 0;i < strs.length;i++){
      let group = []
        if(visited?.has(strs[i])) {
            continue;
        }else{
            visited?.add(strs[i]);
            group?.push(strs[i])
        }
    
            for(let y = i + 1;y < strs.length;y++){
           if(strs[i]?.length === strs[y]?.length) {
            if(this.validFrequency(frequencies[i],frequencies[y])){
                visited.add(strs[y])
            group?.push(strs[y])
           }
        }
      }
        result?.push(group);
        
    }
    return result
    }
    countFrequencies (strs){
let res = []
    for(const c of strs){
            let freq = {};
        for(let ch of c){
            freq[ch] = (freq[ch]||0) + 1;
        }
        res?.push(freq)
    }
    return res;
}
validFrequency (val,val1){
  let keys  = Object.keys(val)
    for(let ch of keys){
        // console.log(ch)
        if(val[ch] !== val1[ch]) return false;
    }
    return true;
}
}
