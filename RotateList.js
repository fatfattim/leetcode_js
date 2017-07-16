/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    var totalCount = 1;
    var currentNode = head;
    
    if(head === null || head.next === null) {
        return head;
    }
    do {
            totalCount ++;
            currentNode = currentNode.next;
    } while (currentNode.next !== null);
    
    console.log("totalCount " + totalCount)
    if(totalCount <= 1 || totalCount === k) {
        return head;
    }
    
    //Circle the list
    currentNode.next = head;

    if(k > totalCount) {
    
        k = (k % totalCount)
    }
    
    currentNode = head;

    for(var i = 0 ; i < totalCount - k - 1; i ++) {
        currentNode = currentNode.next;
    }
    finalNode = currentNode.next;
    currentNode.next = null;
    return finalNode
};