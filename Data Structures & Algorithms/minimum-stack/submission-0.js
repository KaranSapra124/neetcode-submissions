class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        return this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this?.stack[this?.stack?.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        let min = Infinity;
        for (const c of this?.stack) {
            min = Math.min(c, min);
        }
        return min;
    }
}
