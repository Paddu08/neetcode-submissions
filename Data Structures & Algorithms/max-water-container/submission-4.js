class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l =0
        let r= heights.length-1
        let res=0
        
        while(l<r){
            const height=Math.min(heights[l],heights[r])
            const area=height*(r-l)
            if(heights[l]<heights[r]){
                l++
            }
            else{
                r--
            }
            res=Math.max(area,res)
        }
        return res
    }
}
