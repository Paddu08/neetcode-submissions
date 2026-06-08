class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = []
        const sorted = nums.sort((a, b) => a - b)

        for (let i = 0; i < sorted.length - 2; i++) {
            // skip duplicate i
            if (i > 0 && sorted[i] === sorted[i - 1]) continue

            let l = i + 1
            let r = sorted.length - 1

            while (l < r) {
                let sum = sorted[i] + sorted[l] + sorted[r] // recalc every time

                if (sum === 0) {
                    res.push([sorted[i], sorted[l], sorted[r]])

                    // skip duplicate l
                    while (l < r && sorted[l] === sorted[l + 1]) l++
                    // skip duplicate r
                    while (l < r && sorted[r] === sorted[r - 1]) r--

                    l++
                    r--
                } else if (sum < 0) {
                    l++ // need bigger number
                } else {
                    r-- // need smaller number
                }
            }
        }

        return res
    }
}
