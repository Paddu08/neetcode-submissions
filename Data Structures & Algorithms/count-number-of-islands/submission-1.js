class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let col=grid[0].length
        let row=grid.length
        let islands=0
        let direction=[[1,0],[-1,0],[0,-1],[0,1]]
        function dfs(r,c){
          
            if(r<0|| c<0|| r>=row|| c>=col|| grid[r][c]=="0") return 
            grid[r][c]="0"
            for(let [dr,dc] of direction){
                dfs(r+dr,dc+c)
            } 
        }
        for (let r=0;r<row;r++){
            for(let c=0;c<col;c++)
            {
                if(grid[r][c]=="1"){
                    dfs(r,c)
islands++
                

            }}
        }
        return islands
    }
}
