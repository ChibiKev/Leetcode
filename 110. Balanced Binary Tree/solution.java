/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
  int dfs(TreeNode current){
    if (current == null){
      return 0;
    }
    int leftHeight = dfs(current.left);
    int rightHeight = dfs(current.right);
    int difference = Math.abs(leftHeight - rightHeight);
    if (leftHeight == -1 || rightHeight == -1 || difference > 1){
      return -1;
    }
    int maximum = leftHeight;
    if (rightHeight > maximum){
      maximum = rightHeight;
    }
    return maximum + 1;
  }
  public boolean isBalanced(TreeNode root) {
    return dfs(root) >= 0;
  }
}