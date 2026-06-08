class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const vals=[]
        const hammingWeight=(val)=>{
            let res=0
            for(let i=0;i<32;i++){
                if((1<<i)&val){
                    res++
                }
            }
            return res
            
        }
        for (let i=0;i<=n;i++){
            vals.push(hammingWeight(i))
        
        }
        return vals
    }
}
