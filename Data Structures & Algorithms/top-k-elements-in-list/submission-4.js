class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const res={}
        for(let num of nums){
            res[num]=(res[num]||0)+1
        }
        let arr=Object.entries(res).map(([num,freq])=>[freq,num])
        arr.sort((a,b)=>b[0]-a[0])

        return arr.slice(0,k).map((pair)=>pair[1])
    }
}
