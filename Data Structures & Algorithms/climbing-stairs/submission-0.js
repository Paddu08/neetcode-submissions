class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n<=2){return n}
        let res=new Array(n+1).fill(0)
        res[1]=1
        res[2]=2
        for(let i=3;i<=n;i++){
            res[i]=res[i-1]+res[i-2]
        }
        return res[n]
   

   
        
    }
}
