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
  boolean dfs(TreeNode current){
    if (current.val == 2){
      return dfs(current.left) || dfs(current.right);
    }
    if (current.val == 3){
      return dfs(current.left) && dfs(current.right);
    }
    return current.val == 1;
  }
  public boolean evaluateTree(TreeNode root) {
    return dfs(root);
  }
}