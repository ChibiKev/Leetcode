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
  List<Double> bfs(TreeNode start){
    List<TreeNode> myQueue = new ArrayList<TreeNode>(Arrays.asList(start));
    List<Double> result = new ArrayList<Double>();
    while (myQueue.size() != 0){
      Double total = 0.0;
      Double count = 0.0;
      List<TreeNode> newQueue = new ArrayList<TreeNode>();
      for (int index = 0; index < myQueue.size(); index++){
        TreeNode current = myQueue.get(index);
        if (current != null){
          total += current.val;
          count += 1;
        }
        if (current.left != null){
          newQueue.add(current.left);
        }
        if (current.right != null){
          newQueue.add(current.right);
        }
      }
      Double average = total / count;
      result.add(average);
      myQueue = newQueue;
    }
    return result;
  }
  public List<Double> averageOfLevels(TreeNode root) {
    return bfs(root);
  }
}