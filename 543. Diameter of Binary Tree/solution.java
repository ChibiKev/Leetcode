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
  int result = 0;
  int dfs(TreeNode current){
    if (current == null){
      return 0;
    }
    int left = dfs(current.left);
    int right = dfs(current.right);
    
    if (left + right > result){
      result = left + right;
    }

    int maximum = left;
    if (right > maximum){
      maximum = right;
    }
    return maximum + 1;
  }
  public int diameterOfBinaryTree(TreeNode root) {
    dfs(root);
    return result;
  }
}