class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n=nums.length
        const ans=new Array(n)

        ans[0]=1
        for(let i=1;i<n;i++){
            ans[i]=nums[i-1]*ans[i-1]
        }
        let sufprod=1
        for(let i=n-1;i>=0;i--){
            ans[i]=ans[i]*sufprod
            sufprod*=nums[i]
        }
        return ans

    }
    
}
