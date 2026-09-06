class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0,
            right = heights.length - 1,
            result = -Infinity;
        while (left < right) {
            let width = right - left;
            let height = Math.min(heights[left], heights[right]);
            let totalWater = width * height;
            result = Math.max(result, totalWater);
            // Move pointers
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return result;
    }
}
