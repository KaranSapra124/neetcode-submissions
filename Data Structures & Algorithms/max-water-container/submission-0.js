class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0 , j = heights.length - 1;
        let water = -Infinity;
        while(i < j){
            let h = Math.min(heights[i],heights[j]);
            let w = j - i;
            let containedWater = h * w;
            water = Math.max(water,containedWater);
            if(h === heights[i])i++;
            else j--;
        }
        return water
    }
}
