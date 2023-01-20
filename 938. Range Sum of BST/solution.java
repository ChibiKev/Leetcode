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
  int dfs(TreeNode current, int low, int high){
    if (current == null){
      return 0;
    }
    int total = 0;
    if (low <= current.val && current.val <= high){
      total += current.val;
    }
    int leftTotal = dfs(current.left, low, high);
    int rightTotal = dfs(current.right, low, high);
    return total + leftTotal + rightTotal;
  }
  public int rangeSumBST(TreeNode root, int low, int high) {
    return dfs(root, low, high);
  }
}