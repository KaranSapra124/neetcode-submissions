class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let coins = prices
        let maxProfit = 0;
        for (let i = 0; i < coins.length - 1; i++) {
            for (let j = i + 1; j < coins.length; j++) {
                let profit = coins[j] - coins[i];
                maxProfit = Math.max(profit, maxProfit);
            }
        }
        return maxProfit;
    }
}
