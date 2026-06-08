class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const arr=position.map((val,idx)=> [val,speed[idx]])

arr.sort((a,b)=>b[0]-a[0])
const stack=[]

for(let [p,s ] of arr ){
    stack.push((target-p)/s)
    if(stack.length>=2 && stack[stack.length-1]<=stack[stack.length-2]){
        stack.pop()
    }
    
}
return stack.length


    }
}
