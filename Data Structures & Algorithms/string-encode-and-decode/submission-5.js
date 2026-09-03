class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       let res = "";
    for(const s of strs){
        res += s.length + "#" + s
    }
    return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
      let i =0;
    let words = []
    while(i < str.length){
        let j = i;
        while(str[j] !== "#") j++;
let len = parseInt(str.slice(i,j));
        let word = str.slice(j+1,j+1+len);
        words.push(word);
        i = j +1 + len
    }
    return words;
    }
}
