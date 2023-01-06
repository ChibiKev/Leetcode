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
  int xDepth = -1;
  int yDepth = -1;
  TreeNode xParent = null;
  TreeNode yParent = null;
  
  void dfs(TreeNode current, TreeNode parent, int x, int y, int depth){
    if (current == null){
      return;
    }
    if (current.val == x){
      xDepth = depth;
      xParent = parent;
    }
    else if (current.val == y){
      yDepth = depth;
      yParent = parent;
    }
    dfs(current.left, current, x, y, depth + 1);
    dfs(current.right, current, x, y, depth + 1);
  }
  public boolean isCousins(TreeNode root, int x, int y) {
    dfs(root, null, x, y, 0);
    return xDepth == yDepth && xParent != yParent;
  }
}