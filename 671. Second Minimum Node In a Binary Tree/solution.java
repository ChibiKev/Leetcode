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
  int dfs(TreeNode current, int lowest){
    if (current == null){
      return -1;
    }
    if (lowest < current.val){
      return current.val;
    }
    int left = dfs(current.left, lowest);
    int right = dfs(current.right, lowest);

    if (left > lowest || right > lowest){
      int currentLowest = left;
      if ((right < currentLowest && right != -1) || left == -1){
        currentLowest = right;
      }
      return currentLowest;
    }
    return -1;
  }
  public int findSecondMinimumValue(TreeNode root) {
    return dfs(root, root.val);
  }
}