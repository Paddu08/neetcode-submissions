class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        const arr = [...map.entries()].map(([num, freq]) => [freq, num]);
        arr.sort((a, b) => b[0] - a[0]);

        return arr.slice(0, k).map(pair => pair[1]);
    }
}

