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
  boolean dfs(TreeNode current, TreeNode subCurrent){
    if (current == null || subCurrent == null){
      return current == null && subCurrent == null;
    }
    return current.val == subCurrent.val && dfs(current.left, subCurrent.left) && dfs(current.right, subCurrent.right);
  }
  public boolean isSameTree(TreeNode p, TreeNode q) {
    return dfs(p, q);
  }
}