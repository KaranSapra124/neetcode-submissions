class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let temp = temperatures
        let result = new Array(temp.length).fill(0);
        let stack = []

        const isEmpty =()=> stack.length === 0

        for (let i = 0; i < temp.length; i++) {
            while (!isEmpty() && temp[i] > temp[stack[stack.length - 1]]){
                let j = stack.pop()
                result[j] = i - j
            }
            stack.push(i)
        }
        return result;
    }
}
