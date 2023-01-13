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
  TreeNode dfs(TreeNode current, TreeNode last){
    if (current == null){
      return last;
    }
    TreeNode result = dfs(current.left, current);
    current.left = null;
    current.right = dfs(current.right, last);
    return result;
  }
  public TreeNode increasingBST(TreeNode root) {
    return dfs(root, null);     
  }
}