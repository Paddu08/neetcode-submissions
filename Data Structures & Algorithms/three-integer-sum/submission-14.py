class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()


        res=set()
        for i in range(0,len(nums)):
            l=i+1
            r=len(nums)-1
            
            while l<r:
                sum=nums[i]+nums[l]+nums[r]
                if sum>0:
                    r-=1
                elif sum<0:
                    l+=1
                else:
                    res.add((nums[i],nums[l],nums[r]))
                    l+=1
                    r-=1
        return [list(t) for t in res]  # ✅


            




        