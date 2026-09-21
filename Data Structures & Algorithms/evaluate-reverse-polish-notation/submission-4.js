class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const token of tokens) {
            if (token !== "+" && token !== "-" && token !== "*" && token !== "/") {
                stack.push(Number(token));
            } else {
                const b = stack.pop();
                const a = stack.pop();

                let result;

                if (token === "+") {
                    result = a + b;
                } else if (token === "-") {
                    result = a - b;
                } else if (token === "*") {
                    result = a * b;
                } else {
                    result = Math.trunc(a / b);
                }

                stack.push(result);
            }
        }

        return stack.pop();
    }
}
