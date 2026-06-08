class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack=[]
        const res=new Array(temperatures.length).fill(0)

        for(let i=0;i<=temperatures.length;i++){
            let temp=temperatures[i]
            while(stack.length>0 && temp>stack[stack.length-1][0]){
                let [stacktemp,stackidx]=stack.pop()
                res[stackidx]=i-stackidx
            }
            stack.push([temp,i])
        }
        return res
    }
}
