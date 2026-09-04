class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (const s of strs) {
            res += `${s.length}#${s}`;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            // run j till its equal to #
            while (str[j] !== "#") j++;
            // calculate total length
            let size = parseInt(str.substring(i, j));
            // substring the string by using j pointer and size + j + 1
            const decodedStr = str.substring(j + 1, size + j + 1);
            // Push the string into array
            result.push(decodedStr);
            // increment i by j + size + 1
            i = j + size + 1;
        }
        return result;
    }
}
