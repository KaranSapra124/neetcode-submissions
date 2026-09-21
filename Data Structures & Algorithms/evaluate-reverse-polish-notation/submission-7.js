class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        const operands = new Map([
            ["+", "+"],
            ["-", "-"],
            ["*", "*"],
            ["/", "/"],
        ]);

        for (const ch of tokens) {
            if (!operands.has(ch)) {
                stack.push(Number(ch));
            } else {
                let r = stack.pop();
                let t = stack.pop();
                if (ch === "+") stack.push(t + r);
                else if (ch === "-") stack.push(t - r);
                else if (ch === "*") stack.push(t * r);
                else if (ch === "/") stack.push(Math.trunc(t / r));
            }
        }
        return stack[stack.length - 1];
    }
}
