class Solution:
    def maxArea(self, heights: List[int]) -> int:
        l=0
        r=len(heights)-1
        maxarea=0

        while l<r:
            area=(r-l)*min(heights[l],heights[r])
            if heights[l]<heights[r]:
                l+=1
            elif heights[l]>heights[r]:
                r-=1
            else:
                l+=1
                
            maxarea=max(maxarea,area)
            
        return(maxarea)
            



        

        