class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l=0
        char= set()
        maximum=0
        for r in range(len(s)):
            while s[r] in char:
                char.remove(s[l])
                l+=1
            char.add(s[r])
            maximum=max(maximum,r-l+1)
        return maximum

            


        