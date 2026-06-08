class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map=new Map()
    const count = Array(nums.length + 1).fill().map(() => []);
        for(let i=0;i<nums.length;i++){
            map.set(nums[i],(map.get(nums[i])||0)+1)


        }
       
        for(let [key,value] of map){
           count[value].push(key)
            
        }

        const result = [];
    for (let i = count.length - 1; i >= 0 && result.length < k; i--) {
      if (count[i].length > 0) {
        result.push(...count[i]);
      }
    }

    return result.slice(0, k);
  
    }


}
