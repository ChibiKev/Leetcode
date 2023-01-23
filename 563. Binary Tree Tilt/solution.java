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
  int totalTilt = 0;
  
  int dfs(TreeNode current){
    if (current == null){
      return 0;
    }
    int left = dfs(current.left);
    int right = dfs(current.right);
    totalTilt += Math.abs(left - right);
    return current.val + left + right;
  }
  public int findTilt(TreeNode root) {
    dfs(root);
    return totalTilt;
  }
}