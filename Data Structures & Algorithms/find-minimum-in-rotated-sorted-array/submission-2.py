class Solution:
    def findMin(self, nums: List[int]) -> int:
        l=0
        r=len(nums)-1
        minimum=float("Infinity")

        while l<=r:
            if nums[l] <= nums[r]:
                minimum = min(minimum, nums[l])
                break
            
            mid=(l+r)//2
            minimum = min(minimum, nums[mid])

            if nums[l]<=nums[mid]:
                l=mid+1
            else:
                r=mid-1
                
        return int(minimum)
       

        