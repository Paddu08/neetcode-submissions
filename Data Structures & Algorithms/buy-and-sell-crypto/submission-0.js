class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
let l=0
let r=1
let maxprof=0
while(r<prices.length){
    if(prices[r]>prices[l]){
            let profit=prices[r]-prices[l]

        maxprof=Math.max(profit,maxprof)
    }
    else{
        l=r
    }
    r++

}
return maxprof
    }
}
