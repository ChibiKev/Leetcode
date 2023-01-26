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
  TreeNode dfs(TreeNode current, TreeNode current2){
    if (current != null && current2 != null){
      current.val += current2.val;
      current.left = dfs(current.left, current2.left);
      current.right = dfs(current.right, current2.right);
      return current;
    }
    if (current != null){
      return current;
    }
    return current2;
  }
  public TreeNode mergeTrees(TreeNode root1, TreeNode root2) {
    return dfs(root1, root2);
  }
}