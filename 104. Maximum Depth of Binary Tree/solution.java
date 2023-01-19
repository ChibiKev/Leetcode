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
    int leftDepth = dfs(current.left);
    int rightDepth = dfs(current.right);
    int maxDepth = leftDepth;
    if (rightDepth > maxDepth){
      maxDepth = rightDepth;
    }
    return maxDepth + 1;
  }
  public int maxDepth(TreeNode root) {
    return dfs(root);
  }
}