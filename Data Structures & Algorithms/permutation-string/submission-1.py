class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False
        
        small = len(s1)
        s1count = Counter(s1)
        s2count = Counter(s2[:small])
        
        if s1count == s2count:  # ✅ check first window
            return True
        
        for i in range(small, len(s2)):
            s2count[s2[i]] += 1              # add new right char
            s2count[s2[i - small]] -= 1      # remove left char
            if s2count[s2[i - small]] == 0:
                del s2count[s2[i - small]]
            if s1count == s2count:
                return True
        
        return False