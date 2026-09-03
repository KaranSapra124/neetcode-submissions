class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // maxProfit(prices) {
    //     let maxProfit = 0;
    //     for(let i = 0;i < prices.length-1;i++){
    //         for(let j = i+1;j < prices.length;j++){
    //         let totalProfit = prices[j]- prices[i];
    //         if(totalProfit > 0){
    //             maxProfit = Math.max(maxProfit , totalProfit);
    //         }
    //     }
    //     }
    //     return maxProfit;
    // }
    maxProfit(prices){
      let minPrice=Infinity;
      let maxProfit = 0;
       
        for(let l = 0;l < prices.length;l++){
           minPrice = Math.min(minPrice,prices[l]);
           let profit = prices[l] - minPrice;
           maxProfit = Math.max(maxProfit,profit);
        }
        return maxProfit;
    }
}
