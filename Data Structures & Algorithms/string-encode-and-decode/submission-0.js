class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res=""
        for(let word of strs){
            res+=`${word.length}#${word}`
        }
return res 
   }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res=[]
        let i=0
        while(i<str.length){
            let j=i
            while(str[j]!=='#'){
                j++
            }
            let length=Number(str.substring(i,j))
            i=j+1
            j=i+length
            res.push(str.substring(i,j))
            i=j

        }
        return res

    }
}
