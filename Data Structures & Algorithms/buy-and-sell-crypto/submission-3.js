class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l=0
        let r=1
        let maxp=0
        while(r<prices.length){
            let profit =prices[r]-prices[l]
            if(prices[r]>prices[l]){
                maxp=Math.max(profit,maxp)
            }
            else{
                l=r
            }
            r++
        }
        return maxp
    }
}
