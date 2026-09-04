class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Rows
        for (let i = 0; i < board.length; i++) {
            const freqmap = {};
            for (let j = 0; j < board[i]?.length; j++) {
                freqmap[board[i][j]] = (freqmap[board[i][j]] || 0) + 1;
                if (freqmap[board[i][j]] > 1 && board[i][j] !== ".") {
                    return false;
                }
            }
        }
        // Columns
        let i = 0;
        let freqmap = {};
        let j = 0;
        while (j < 9) {
            //  Reset I and J
            if (i === 9) {
                j++;
                i = 0;
                freqmap = {};
            }
            freqmap[board[i][j]] = (freqmap[board[i][j]] || 0) + 1;
            if (freqmap[board[i][j]] > 1 && board[i][j] !== ".") {
                return false;
            }
            i++;
        }
        // Grid
        for (let boxRow = 0; boxRow < 9; boxRow += 3) {
            for (let boxCol = 0; boxCol < 9; boxCol += 3) {
                let freqmap = {};
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        const value = board[boxRow + i][boxCol + j];
                        if (value !== ".") {
                            freqmap[value] = (freqmap[value] || 0) + 1;

                            if (freqmap[value] > 1) {
                                return false;
                            }
                        }
                    }
                }
            }
        }
        return true;
    }
}
