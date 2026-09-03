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
        if(prices.length === 2) {
            let profit = prices[1] - prices[0];
            return profit > 0 ? profit : 0
        }
        let maxProfit = 0;
        for(let l = 0;l <= prices.length-2;l++){
            let r = prices.length-1;
            while(r > l){
                let profit = prices[r] - prices[l];
                maxProfit = Math.max(maxProfit,profit);
                console.log(maxProfit,prices[l],prices[r])
                r--;
            }
        }
        return maxProfit;
    }
}
