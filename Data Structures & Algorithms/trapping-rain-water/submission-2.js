class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let sum = 0;
        const prefix = new Array(height.length + 1).fill(0);
        const suffix = new Array(height.length + 1).fill(0);

        // Prefix
        prefix[0] = height[0];

        for (let i = 1; i < height.length; i++) {
            prefix[i] = Math.max(prefix[i - 1], height[i]);
        }
        // Suffix
        suffix[height.length - 1] = height[height.length - 1];

        for (let i = height.length - 2; i >= 0; i--) {
            suffix[i] = Math.max(suffix[i + 1], height[i]);
        }

        // console.log(prefix, suffix)

        for (let i = 1; i < height.length - 1; i++) {
            // Calculate Total Water stored

            sum += Math.min(prefix[i], suffix[i]) - height[i];
        }
        return sum;
    }
}
