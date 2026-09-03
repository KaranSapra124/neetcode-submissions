class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        let sFreq = {},tFreq={};
        for(let ch in s){
            if(sFreq[s[ch]]){
                sFreq[s[ch]]+=1
            }else{
                sFreq[s[ch]] = 1
            }
        }
        for(let ch in t){
             if(tFreq[t[ch]]){
                tFreq[t[ch]]+=1
            }else{
                tFreq[t[ch]] = 1
            }
        }
        const keys = Object.keys(sFreq);
            console.log(sFreq,tFreq)

        for(let k in keys){
            if(sFreq[keys[k]]!==tFreq[keys[k]]) return false;
        }
        
        return true;
    }
}
