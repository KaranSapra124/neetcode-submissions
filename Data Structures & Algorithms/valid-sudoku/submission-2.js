class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let nums = board;
        // Rows
        for (let i = 0; i < board.length; i++) {
            const rowFreq = {};
            for (let j = 0; j < board[i]?.length; j++) {
                rowFreq[nums[i][j]] = (rowFreq[nums[i][j]] || 0) + 1;

                if (rowFreq[nums[i][j]] > 1 && nums[i][j] !== ".") {
                    return false;
                }
            }
        }
        // Columns
        let row = 0,
            col = 0;
             let colFreq = {};
        while (col < 9) {
           
            if (row === 9) {
                col++
                colFreq = {};
                row = 0;
            }
            colFreq[nums[row][col]] = (colFreq[nums[row][col]] || 0) + 1;
            if (colFreq[nums[row][col]] > 1 && nums[row][col] !== ".") {
                return false;
            }
            row++;
        }
        // validate sudoku
        for (let boxRow = 0; boxRow < 9; boxRow += 3) {
            for (let boxCol = 0; boxCol < 9; boxCol += 3) {
                const freq = {};
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        const value = nums[boxRow + i][boxCol + j];
                        freq[value] = (freq[value] || 0) + 1;

                        if (freq[value] > 1 && value !== ".") {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }
}
