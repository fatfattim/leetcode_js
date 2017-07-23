/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

 function TreeNode(val) {
   this.val = val;
   this.left = this.right = null;
 }

 var hasPathSum = function(root, sum) {
   if(root == null) {
     return false;
   }
   return recursiveSum(root, sum, root.val);
 };

 var recursiveSum = function(node , sum, result) {
   // it is leaf
   if (node.left == null && node.right == null) {
     if(sum == result) {
       return true;
     } else {
       return false;
     }
   }
   var isTrue = false;
   if (node.left != null) {
       isTrue = recursiveSum(node.left, sum, result + node.left.val)
   }

   if (node.right != null) {
       isTrue = isTrue || recursiveSum(node.right, sum, result + node.right.val)
   }
   return isTrue
 }

 var node = new TreeNode(1);
 var node1 = new TreeNode(2);
 var node2 = new TreeNode(3);
 node.left = node1;
