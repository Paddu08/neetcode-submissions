class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l=0
        let r=0
        let set=new Set()
        let substr=0

        while(r<s.length){
            while(set.has(s[r])){
                set.delete(s[l])
                l++
            }
          
            set.add(s[r])
            substr=Math.max(substr,r-l+1)
            r++
            

        }
        return substr
    }
    
}
