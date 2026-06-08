class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res=[]
        let n=nums.length
        let mask=1<<n
        for(let i=0;i<mask;i++){
            let subset=[]
            for(let j=0;j<n;j++){
                if(i & (1<<j )){
                    subset.push(nums[j])
                }
            }
                            res.push(subset)


        }
       return res
    }
}
