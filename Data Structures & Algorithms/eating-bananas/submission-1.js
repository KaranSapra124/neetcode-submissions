class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1,
            right = Math.max(...piles),
            hours = 0;

        while (left <= right) {
            let mid = Math.round((left + right) / 2);
            let count = 0;
            for (const p of piles) {
                count += Math.ceil(p / mid);
            }
            if (count <= h) {
                hours = mid;
                count = 0;
                right = mid - 1;
            } else if (count > h) {
                count = 0;
                left = mid + 1;
            }
        }
        return hours;
    }
}
