class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if len(t) > len(s):
            return ""
        
        smallcount = Counter(t)
        window = {}
        l = 0
        have = 0
        need = len(smallcount)
        res = [-1, -1]
        resLen = float("infinity")

        for r in range(len(s)):
            window[s[r]] = window.get(s[r], 0) + 1
            if s[r] in smallcount and window[s[r]] == smallcount[s[r]]:
                have += 1

            while have == need:                        # ✅ while not if
                if (r - l + 1) < resLen:              # ✅ update res
                    resLen = r - l + 1
                    res = [l, r]
                window[s[l]] -= 1                     # shrink
                if s[l] in smallcount and window[s[l]] < smallcount[s[l]]:
                    have -= 1
                l += 1

        return s[res[0]:res[1] + 1] if resLen != float("infinity") else ""