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
  boolean dfs(TreeNode current, TreeNode subCurrent){
    if (current == null){
      return false;
    }
    else if (isIdenticalDFS(current, subCurrent)){
      return true;
    }

    return dfs(current.left, subCurrent) || dfs(current.right, subCurrent);
  }
  
  boolean isIdenticalDFS(TreeNode current, TreeNode subCurrent){
    if (current == null || subCurrent == null){
      return current == null && subCurrent == null;
    }
    return current.val == subCurrent.val && isIdenticalDFS(current.left, subCurrent.left) && isIdenticalDFS(current.right, subCurrent.right);
  }
  public boolean isSubtree(TreeNode root, TreeNode subRoot) {
    return dfs(root, subRoot);
  }
}