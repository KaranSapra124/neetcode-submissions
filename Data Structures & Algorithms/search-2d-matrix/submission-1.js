class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for (let i = 0; i < matrix.length; i++) {
            let l = 0,
                r = matrix[i].length - 1;

            while (l <= r) {
                const mid = Math.floor(l + (r - l) / 2);
                if (matrix[i][mid] === target) {
                    return true;
                }
                if (matrix[i][mid] < target) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        }
        return false;
    }
}
