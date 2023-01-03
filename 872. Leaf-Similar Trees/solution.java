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
  void dfs(TreeNode current, List<Integer> array){
    if (current.left == null && current.right == null){
      array.add(current.val);
    }
    if (current.left != null){
      dfs(current.left, array);
    }
    if (current.right != null){
      dfs(current.right, array);
    }
  }
  public boolean leafSimilar(TreeNode root1, TreeNode root2) {
    List<Integer> root1Leaf = new ArrayList<Integer>();
    List<Integer> root2Leaf = new ArrayList<Integer>();
    dfs(root1, root1Leaf);
    dfs(root2, root2Leaf);
    return root1Leaf.equals(root2Leaf);
  }
}