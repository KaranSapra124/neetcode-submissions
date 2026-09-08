class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity
        let maxProfit = 0;
        for(const price of prices){
            minPrice = Math.min(minPrice,price)
            let totalProfit = price - minPrice
            maxProfit = Math.max(maxProfit,totalProfit)
        }
        return maxProfit
    }
}
