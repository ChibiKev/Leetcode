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
  boolean dfs(TreeNode current, int amount, int targetSum){
    if (current == null){
      return false;
    }
    amount += current.val;
    if (current.left == null && current.right == null && amount == targetSum){
      return true;
    }
    return dfs(current.left, amount, targetSum) || dfs(current.right, amount, targetSum);
  }
  public boolean hasPathSum(TreeNode root, int targetSum) {
    int total = 0;
    return dfs(root, total, targetSum);
  }
}