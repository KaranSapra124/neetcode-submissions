class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(s) {
        if (s.length % 2 !== 0) return false;
        const newStack = new Stack();
        for (let ch = 0; ch < s.length; ch++) {
            if ((s[ch] === ")" || s[ch] === "]" || s[ch] === "}") && ch === 0) {
                return false;
            }
            if (s[ch] === "(" || s[ch] === "[" || s[ch] === "{") {
                newStack.push(s[ch])
            }
            if (s[ch] === ")" || s[ch] === "]" || s[ch] === "}") {
                const peekElem = newStack.peek();
                if (
                    (s[ch] === ")" && peekElem !== "(") ||
                    (s[ch] === "]" && peekElem !== "[") ||
                    (s[ch] === "}" && peekElem !== "{")
                ) {
                    return false;
                }

                newStack.pop()
            }
        }
        return newStack.isEmpty()
    }
}
class Stack {
    static lastItem = null;
    constructor() {
        this.items = []
    }
    push(item) {
        return this.items.push(item)
    }
    pop() {
        if (this.items.length === 0) return null;
        return this.items.pop()
    }
    peek() {
        if (this.items.length === 0) return null;
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0
    }
}