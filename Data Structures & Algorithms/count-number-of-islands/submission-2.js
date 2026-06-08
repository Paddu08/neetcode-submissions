class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const row=grid.length
        const col=grid[0].length
        let count =0
        const directions=[[0,1],[0,-1],[1,0],[-1,0]]

       function dfs(r,c){
       if(r<0 || c < 0|| r>=row|| c>=col|| grid[r][c]=="0") return
    
    grid[r][c]="0"

    for(let [dr,dc] of directions){
        dfs(r+dr,c+dc)
    }
        


        }

        for(let i=0;i<=row-1;i++){
            for(let j=0;j<=col-1;j++){
                if(grid[i][j]=='1'){
                    dfs(i,j)
                    count++
                }
                
            }
        }
        return count
    }
}
