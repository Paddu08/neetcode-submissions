class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map={}
        const res=[]
        for(let i=0;i<nums.length;i++){
            if(!map[nums[i]]){
                map[nums[i]]=0
            }
            map[nums[i]]+=1

        }
        
        for(let [key,value] of Object.entries(map)){
            res.push([key,value])

        }
       const sorted=res.sort((a,b)=>b[1]-a[1])
return (sorted.slice(0,k).map((val)=>Number(val[0])))
    }
    
}
