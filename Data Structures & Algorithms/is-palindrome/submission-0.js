class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let string=s.toLowerCase().replace(/[^a-z0-9]/g,"")
       let l=0
       let r=string.length-1
       while(l<r){
        if(string[r]!==string[l]){
          return false
        }
        r--
        l++

       }
       return true
    
        
    }
}
