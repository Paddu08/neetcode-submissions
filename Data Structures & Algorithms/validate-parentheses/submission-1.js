class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            ")": "(",
            "}": "{",
            "]": "["
        };
        const stack = [];

        for (let ch of s) {
            // if it's a closing bracket
            if (map[ch]) {
                const top = stack.pop(); // pop last open bracket
                if (top !== map[ch]) return false; // mismatch
            } else {
                stack.push(ch); // it's an opening bracket
            }
        }

        return stack.length === 0; // all opened brackets must be closed
    }
}
