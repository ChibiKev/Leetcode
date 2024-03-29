/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

class Solution {
  TreeNode dfs(TreeNode original, TreeNode cloned, TreeNode target){
    if (original == null){
      return null;
    }
    if (original == target){
      return cloned;
    }
    TreeNode left = dfs(original.left, cloned.left, target);
    TreeNode right = dfs(original.right, cloned.right, target);
    if (left != null){
      return left;
    }
    else if (right != null){
      return right;
    }
    return null;
  }
  public final TreeNode getTargetCopy(final TreeNode original, final TreeNode cloned, final TreeNode target) {
    return dfs(original, cloned, target);
  }
}