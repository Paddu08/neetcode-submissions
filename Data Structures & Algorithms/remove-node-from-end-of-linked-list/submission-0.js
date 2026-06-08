class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let nodes = [];
        let curr = head;

        // Store node references, not just values
        while (curr) {
            nodes.push(curr);
            curr = curr.next;
        }

        let removeIndex = nodes.length - n;

        // If we need to remove the first node
        if (removeIndex === 0) {
            return head.next;
        }

        // Skip the node at removeIndex
        nodes[removeIndex - 1].next = nodes[removeIndex].next;
        return head;
    }
}
