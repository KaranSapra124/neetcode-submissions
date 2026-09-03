class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        return this.minimumWinSubstr(s,t)
    }
    minimumWinSubstr (s,t){
    
    const isValid =(sF,tF)=>{
       
        return Object.keys(tF).every((ch)=>{
 return sF[ch] >= tF[ch];     
    })
    }
    let i = 0 , j  = 0 , tFreq = {} , sFreq = {},result="";
    let op = t.split('')
    for(let ch of op){
        tFreq[ch] = (tFreq[ch] || 0)+1
    }
   
    while(j < s.length){
        let ch = s[j];
        sFreq[ch] = (sFreq[ch] || 0)+1;
        while(isValid(sFreq,tFreq)){
           let len = j - i + 1;
          
            if(result === "" || len < result.length){
            result = s.substring(i,j+1)
            }
        sFreq[s[i]]--;

            i++
        }
        j++;
    }
    return result
}
}
