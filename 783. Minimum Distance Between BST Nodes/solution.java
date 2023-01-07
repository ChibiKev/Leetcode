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
  double minimumDifference = Double.POSITIVE_INFINITY;
  int value = -1;
  
  void dfs(TreeNode current){
    if (current == null){
      return;
    }
    dfs(current.left);
    if (value != -1){
      int difference = Math.abs(current.val - value);
      if (difference < minimumDifference){
        minimumDifference = difference;
      }
    }
    value = current.val;
    dfs(current.right);
  }
  public int minDiffInBST(TreeNode root) {
    dfs(root);
    return (int) minimumDifference; 
  }
}