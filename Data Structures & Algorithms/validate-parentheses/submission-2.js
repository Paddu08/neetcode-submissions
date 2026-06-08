class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack=[]
        let map={
        "}":"{",
        "]":"[",
        ")":"("
        }
        for (let c of s){
            if(map[c]){
                const last=stack.pop()
                if(last !==map[c]) return false
            }
            else{ 
                stack.push(c)
            }
        }
        return stack.length==0
    }
}
