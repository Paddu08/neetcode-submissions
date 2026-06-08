class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
       let buy=0
       let sell=1
       let maxP=0
       while(sell<prices.length){
        if(prices[buy]<prices[sell]){
            let profit=prices[sell]-prices[buy]
            maxP=Math.max(profit,maxP)
        }
        else{
           buy=sell
        }
        sell++

       }
       return maxP

    }
}
