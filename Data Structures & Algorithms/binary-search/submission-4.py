class Solution:
    def search(self, nums: List[int], target: int) -> int:
        return self.b_search(0,len(nums)-1,nums,target)

    def b_search(self,l,r,nums,target):
        if l>r:
            return -1
        m=l+(r-l)//2
        if nums[m]==target:
            return m
        if nums[m]<target:
            return self.b_search(m+1,r,nums,target)
        else:
            return self.b_search(l,m-1,nums,target)
        


    
        