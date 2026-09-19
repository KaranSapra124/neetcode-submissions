class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const isEmpty = () => stack.length === 0;
        // Iterate
        for (const p of s) {
            const peek = stack[stack.length - 1];
            if (
                !isEmpty() &&
                ((peek === "(" && p === ")") ||
                    (peek === "{" && p === "}") ||
                    (peek === "[" && p === "]"))
            ) {
                stack.pop();
            } else {
                stack.push(p);
            }
        }
        return isEmpty();
    }
}
