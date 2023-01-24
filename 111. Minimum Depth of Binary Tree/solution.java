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
  int dfs(TreeNode current, int depth){
    if (current == null){
      return depth - 1;
    }
    else if (current.left == null && current.right == null){
      return depth;
    }
    else if (current.left != null && current.right == null){
      return dfs(current.left, depth + 1);
    }
    else if (current.left == null && current.right != null){
      return dfs(current.right, depth + 1);
    }

    int leftDepth = dfs(current.left, depth + 1);
    int rightDepth = dfs(current.right, depth + 1);
    if (leftDepth < rightDepth){
      return leftDepth;
    }
    return rightDepth;
  }
  public int minDepth(TreeNode root) {
    return dfs(root, 1);
  }
}