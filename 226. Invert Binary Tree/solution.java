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
  TreeNode dfs(TreeNode current){
    if (current == null){
      return current;
    }
    TreeNode temp = current.left;
    current.left = dfs(current.right);
    current.right = dfs(temp);
    return current;
  }
  public TreeNode invertTree(TreeNode root) {
    return dfs(root);
  }
}