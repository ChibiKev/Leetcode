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
    boolean left = true;
    if (current.left != null){
      left = current.val == current.left.val && dfs(current.left);
    }
    boolean right = true;
    if (current.right != null){
      right = current.val == current.right.val && dfs(current.right);
    }
    return left && right;
  }
  public boolean isUnivalTree(TreeNode root) {
    return dfs(root);
  }
}