class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      let res=[]
      const map=new Map()
      for(let i=0;i<strs.length;i++){
        let sorted=strs[i].split("").sort().join("")
        if(!map.has(sorted)){
            map.set(sorted,[])
        }
        map.get(sorted).push(strs[i])
       
      }
      for(let [key,value] of map){
        res.push(value)
      }
      return res
    }
    
}
