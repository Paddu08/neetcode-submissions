class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map=new Map()
        const stack=[]
        map.set("(",")")
        map.set("{","}")
        map.set("[","]")

        for (let c of s){
            if(map.get(c)){
                stack.push(map.get(c))

            
            }
            else{
               let  last=stack.pop()
                if(c!== last){
                    return false
                }
            }

        }
        return stack.length==0

        
        
    }
    

    
}
