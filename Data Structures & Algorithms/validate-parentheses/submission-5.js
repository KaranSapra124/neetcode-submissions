class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for (const p of s) {
            const peek = stack[stack?.length - 1];
            // console.log(peek);
            const isEmpty = stack?.length === 0;
            if (
                !isEmpty &&
                (peek === "(" && p === ")") ||
                (peek === "[" && p === "]") ||
                (peek === "{" && p === "}")
            ) {
                stack.pop();
            } else {
                stack.push(p);
            }
        }
        return stack.length === 0;
    }
}
