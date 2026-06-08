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
           for(let k=0;k<n;k++){
            if(i& (1<<k)){
                subset.push(nums[k])
            }
           
           }
            res.push(subset)
        }
        return res
    }
}
