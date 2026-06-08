class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows=board.length
        const cols=board[0].length
        const path=new Set()

        const dfs=(r,c,i)=>{
            if(i==word.length){
                return true
            }
            if(r<0|| r>=rows ||c<0||c>=cols || path.has(`${r},${c}`) || board[r][c]!==word[i]){
                return false

            }
            path.add(`${r},${c}`)
            const res= dfs(r+1,c,i+1) || dfs(r-1,c,i+1)||
            dfs(r,c+1,i+1)||dfs(r,c-1,i+1)
                        path.delete(`${r},${c}`);
return res

        }

        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                if(dfs(i,j,0)) return true

            }
        }
        return false
    }
}
