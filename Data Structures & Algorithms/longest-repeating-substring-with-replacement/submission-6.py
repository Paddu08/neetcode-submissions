class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        res=0
        count={}
        l=0
        for r in range(0,len(s)):
            count[s[r]]=count.get(s[r],0)+1
            maxf=max(count.values())
            while r-l+1-maxf>k:
                count[s[l]]-=1
                if count[s[l]]==0:
                    del count[s[l]]
                l+=1
            res=max(res,r-l+1)
        return res


        
        